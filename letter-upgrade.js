/* fix next-word audio */
(function () {
  var css = document.createElement("style");
  css.textContent = ".word-mask.listen{font-size:42px;border-style:solid;border-color:#99f6e4;background:#f0fdfa}.word-mask.reveal{font-size:40px;border-style:solid}.word-mask.ok{background:#dcfce7;border-color:#16a34a;color:#166534}.word-mask.bad{background:#ffe4e6;border-color:#e11d48;color:#9f1239}";
  document.head.appendChild(css);

  function hasVoice(word) {
    return typeof VOICE_MAP !== "undefined" && !!VOICE_MAP[word];
  }

  window.pickQueue = function (n) {
    var pool = filteredWords();
    var voiced = pool.filter(function (w) { return hasVoice(w.w); });
    if (voiced.length >= 8) pool = voiced;
    var recent = {};
    (state.recentWords || []).forEach(function (x) { recent[x] = 1; });
    var fresh = pool.filter(function (w) { return !recent[w.w]; });
    if (fresh.length < n) fresh = pool.slice();
    var q = shuffle(fresh).slice(0, Math.min(n, fresh.length));
    state.recentWords = q.map(function (w) { return w.w; }).concat(state.recentWords || []).slice(0, 60);
    return q;
  };

  function audioEl() {
    return document.getElementById("ttsAudio") || new Audio();
  }

  function primeAudio() {
    try {
      var a = audioEl();
      a.muted = true;
      var p = a.play();
      if (p && p.then) p.then(function () { a.pause(); a.muted = false; }).catch(function () { a.muted = false; });
      else a.muted = false;
    } catch (e) {}
  }

  window.playClipNow = function (info, slow) {
    return new Promise(function (resolve, reject) {
      var a = audioEl();
      var file = "audio/" + info.f;
      var start = info.s;
      var end = info.e;
      var rate = slow ? 0.55 : 0.72;
      if (window._clipWatch) { clearTimeout(window._clipWatch); window._clipWatch = null; }
      try { a.pause(); } catch (e) {}
      function tick() {
        if (!a || a.paused) return;
        if (a.currentTime >= end) { a.pause(); resolve("bank"); return; }
        window._clipWatch = setTimeout(tick, 30);
      }
      function go() {
        try { a.playbackRate = rate; a.currentTime = start; } catch (e) {}
        var p = a.play();
        if (p && p.then) {
          p.then(function () {
            try { if (Math.abs(a.currentTime - start) > 0.1) a.currentTime = start; } catch (e) {}
          }).catch(reject);
        }
        window._clipWatch = setTimeout(tick, 40);
      }
      if (String(a.src || "").indexOf(info.f) < 0) {
        a.src = file;
        a.oncanplay = function () { a.oncanplay = null; go(); };
        a.onerror = function () { reject(new Error("audio")); };
        a.load();
      } else {
        go();
      }
    });
  };

  var oldSpeak = window.speak;
  window.speak = function (text, slow) {
    var t = String(text || "").trim();
    if (!t) return;
    if (typeof stopSpeak === "function") stopSpeak();
    if (typeof VOICE_MAP !== "undefined" && VOICE_MAP[t]) {
      window.playClipNow(VOICE_MAP[t], slow).catch(function () { if (oldSpeak) oldSpeak(t, slow); });
      return;
    }
    if (oldSpeak) oldSpeak(t, slow);
  };

  var oldStart = window.startMode;
  window.startMode = function (mode) {
    oldStart(mode);
    if (mode === "night" || mode === "read") return;
    if (state.queue && state.queue.length) {
      state.queue = pickQueue(12);
      state.index = 0;
      renderQuestion();
    }
  };

  var oldRender = window.renderQuestion;
  window.renderQuestion = function () {
    oldRender();
    if (state.mode !== "letter" || !state.current) return;
    var hint = document.getElementById("playHint");
    var prompt = document.getElementById("playPrompt");
    if (hint) hint.textContent = "گوش بده و حرف درست را بزن";
    if (prompt) {
      prompt.className = "word-mask listen";
      prompt.textContent = "👂";
      prompt.style.display = "";
    }
  };

  window.builtWord = function (letter) {
    var w = state.current && state.current.w ? state.current.w : "";
    var i = findFocusIndex(state.current || { w: w });
    return w.slice(0, i) + letter + w.slice(i + 1);
  };

  window.answerChoice = function (given, expected, btn) {
    if (state.locked) return;
    state.locked = true;
    primeAudio();
    state.sessionTotal += 1;
    state.attempts += 1;
    var ok = normalize(given) === normalize(expected);
    document.querySelectorAll(".choice").forEach(function (b) {
      b.disabled = true;
      if (normalize(b.textContent) === normalize(expected)) b.classList.add("ok");
    });
    if (!ok && btn) btn.classList.add("bad");
    if (state.mode === "letter") {
      var prompt = document.getElementById("playPrompt");
      if (prompt) {
        prompt.style.display = "";
        prompt.className = "word-mask reveal " + (ok ? "ok" : "bad");
        prompt.textContent = state.current.w;
      }
      showFeed(ok, state.current.w, ok ? "" : builtWord(given));
    } else {
      showFeed(ok, expected);
    }
    recordLetter(state.current.focus, ok);
    if (ok) {
      state.sessionCorrect += 1;
      addStar(1, btn || document.getElementById("playPrompt"));
    }
    document.getElementById("playScore").textContent = state.sessionCorrect + " / " + state.sessionTotal;
    setTimeout(function () {
      state.index += 1;
      renderQuestion();
      setTimeout(function () { if (state.current) speakCurrent(); }, 120);
    }, ok ? 1400 : 2000);
  };

  window.showFeed = function (ok, expected, wrong) {
    var el = document.getElementById("playFeed");
    el.className = "feedback show " + (ok ? "ok" : "bad");
    if (ok) el.textContent = shuffle(PRAISE_OK)[0] + "  کلمه درست: " + expected + " ⭐";
    else if (wrong) el.textContent = "تو نوشتی «" + wrong + "»  —  درست: «" + expected + "»";
    else el.textContent = shuffle(PRAISE_BAD)[0] + " شکل درست: " + expected;
  };
})();
