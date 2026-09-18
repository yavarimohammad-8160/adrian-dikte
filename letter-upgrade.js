/* ارتقای انتخاب حرف */
(function () {
  var css = document.createElement("style");
  css.textContent = ".word-mask.listen{font-size:42px;border-style:solid;border-color:#99f6e4;background:#f0fdfa}.word-mask.reveal{font-size:40px;border-style:solid}.word-mask.ok{background:#dcfce7;border-color:#16a34a;color:#166534}.word-mask.bad{background:#ffe4e6;border-color:#e11d48;color:#9f1239}";
  document.head.appendChild(css);
  var extra = [
    {w:"ژله",g:"zh",focus:"ژ"},{w:"مژده",g:"zh",focus:"ژ"},{w:"گاراژ",g:"zh",focus:"ژ"},{w:"ژورنال",g:"zh",focus:"ژ"},
    {w:"بیژن",g:"zh",focus:"ژ"},{w:"ژست",g:"zh",focus:"ژ"},
    {w:"ثمر",g:"s",focus:"ث"},{w:"کثیر",g:"s",focus:"ث"},{w:"مثل",g:"s",focus:"ث"},{w:"ثواب",g:"s",focus:"ث"},
    {w:"اثاث",g:"s",focus:"ث"},{w:"حدیث",g:"s",focus:"ث"},{w:"بعثت",g:"s",focus:"ث"},{w:"تأثیر",g:"s",focus:"ث"},
    {w:"سه",g:"s",focus:"س"},{w:"سبد",g:"s",focus:"س"},{w:"سایه",g:"s",focus:"س"},{w:"سکه",g:"s",focus:"س"},
    {w:"داستان",g:"s",focus:"س"},{w:"لباس",g:"s",focus:"س"},{w:"سنگ",g:"s",focus:"س"},{w:"سوزن",g:"s",focus:"س"},
    {w:"سرما",g:"s",focus:"س"},{w:"خروس",g:"s",focus:"س"},{w:"عروس",g:"s",focus:"س"},{w:"اسم",g:"s",focus:"س"},
    {w:"صبر",g:"s",focus:"ص"},{w:"صندلی",g:"s",focus:"ص"},{w:"صورت",g:"s",focus:"ص"},{w:"اصل",g:"s",focus:"ص"},
    {w:"صادق",g:"s",focus:"ص"},{w:"توصیه",g:"s",focus:"ص"},{w:"مخصوص",g:"s",focus:"ص"},{w:"توصیف",g:"s",focus:"ص"},
    {w:"مصطفی",g:"s",focus:"ص"},
    {w:"طرف",g:"t",focus:"ط"},{w:"طول",g:"t",focus:"ط"},{w:"طرح",g:"t",focus:"ط"},{w:"طلب",g:"t",focus:"ط"},
    {w:"طعم",g:"t",focus:"ط"},{w:"سلطان",g:"t",focus:"ط"},{w:"بلیت",g:"t",focus:"ت"},{w:"توپ",g:"t",focus:"ت"},
    {w:"تخت",g:"t",focus:"ت"},{w:"ستاره",g:"t",focus:"ت"},{w:"خواهر",g:"t",focus:"ت"},{w:"بستنی",g:"t",focus:"ت"},
    {w:"دست",g:"t",focus:"ت"},{w:"برگشت",g:"t",focus:"ت"},
    {w:"حیوان",g:"h",focus:"ح"},{w:"حساب",g:"h",focus:"ح"},{w:"حرگت",g:"h",focus:"ح"},{w:"محله",g:"h",focus:"ح"},
    {w:"حوله",g:"h",focus:"ح"},{w:"حقیقت",g:"h",focus:"ح"},{w:"محل",g:"h",focus:"ح"},{w:"حسن",g:"h",focus:"ح"},
    {w:"کوه",g:"h",focus:"ه"},{w:"ده",g:"h",focus:"ه"},{w:"هفته",g:"h",focus:"ه"},{w:"نگاه",g:"h",focus:"ه"},
    {w:"همراه",g:"h",focus:"ه"},{w:"سیاه",g:"h",focus:"ه"},{w:"چهره",g:"h",focus:"ه"},
    {w:"موضوع",g:"z",focus:"ض"},{w:"توضیح",g:"z",focus:"ض"},{w:"ضعیف",g:"z",focus:"ض"},{w:"اضافه",g:"z",focus:"ض"},
    {w:"قرض",g:"z",focus:"ض"},{w:"عضو",g:"z",focus:"ض"},{w:"ضد",g:"z",focus:"ض"},{w:"رضایت",g:"z",focus:"ض"},
    {w:"ظاهر",g:"z",focus:"ظ"},{w:"انتظار",g:"z",focus:"ظ"},{w:"عظمت",g:"z",focus:"ظ"},{w:"لفظ",g:"z",focus:"ظ"},
    {w:"دانش",g:"z",focus:"ذ"},{w:"آذر",g:"z",focus:"ذ"},{w:"اذان",g:"z",focus:"ذ"},{w:"ذوق",g:"z",focus:"ذ"},
    {w:"پذیرش",g:"z",focus:"ذ"},{w:"بازی",g:"z",focus:"ز"},{w:"زنگ",g:"z",focus:"ز"},{w:"روزنامه",g:"z",focus:"ز"},
    {w:"پازل",g:"z",focus:"ز"},
    {w:"عصر",g:"eyn",focus:"ع"},{w:"بعد",g:"eyn",focus:"ع"},{w:"معنی",g:"eyn",focus:"ع"},{w:"علاقه",g:"eyn",focus:"ع"},
    {w:"معلوم",g:"eyn",focus:"ع"},{w:"عمق",g:"eyn",focus:"ع"},{w:"عرب",g:"eyn",focus:"ع"},{w:"دعوا",g:"eyn",focus:"ع"},
    {w:"عادت",g:"eyn",focus:"ع"},{w:"قطعه",g:"eyn",focus:"ع"},
    {w:"مرغ",g:"gh",focus:"غ"},{w:"شغل",g:"gh",focus:"غ"},{w:"مشغول",g:"gh",focus:"غ"},{w:"آغوش",g:"gh",focus:"غ"},
    {w:"تیغ",g:"gh",focus:"غ"},{w:"باغچه",g:"gh",focus:"غ"},{w:"آغاز",g:"gh",focus:"غ"},{w:"وقت",g:"gh",focus:"ق"},
    {w:"قوری",g:"gh",focus:"ق"},{w:"قهرمان",g:"gh",focus:"ق"},{w:"دقیقه",g:"gh",focus:"ق"},{w:"قفل",g:"gh",focus:"ق"},
    {w:"قایق",g:"gh",focus:"ق"}
  ];
  if (typeof WORDS !== "undefined") {
    var have = {};
    WORDS.forEach(function (x) { have[x.w + "|" + x.g] = 1; });
    extra.forEach(function (w) { if (!have[w.w + "|" + w.g]) WORDS.push(w); });
  }
  if (typeof state !== "undefined" && !state.recentWords) state.recentWords = [];
  window.pickQueue = function (n) {
    var pool = filteredWords();
    var recent = {};
    (state.recentWords || []).forEach(function (w) { recent[w] = 1; });
    var fresh = pool.filter(function (w) { return !recent[w.w]; });
    if (fresh.length < n) fresh = pool.slice();
    var q = shuffle(fresh).slice(0, Math.min(n, fresh.length));
    state.recentWords = q.map(function (w) { return w.w; }).concat(state.recentWords || []).slice(0, 60);
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      raw.recentWords = state.recentWords;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch (e) {}
    return q;
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
  var oldSpeak = window.speak;
  window.speak = function (text, slow) {
    var t = String(text || "").trim();
    if (!t) return;
    if (typeof VOICE_MAP !== "undefined" && VOICE_MAP[t]) { oldSpeak(t, slow); return; }
    try {
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t);
      u.lang = "fa-IR";
      u.rate = slow ? 0.65 : 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {}
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
    setTimeout(function () { state.index += 1; renderQuestion(); }, ok ? 1600 : 2200);
  };
  window.showFeed = function (ok, expected, wrong) {
    var el = document.getElementById("playFeed");
    el.className = "feedback show " + (ok ? "ok" : "bad");
    if (ok) el.textContent = shuffle(PRAISE_OK)[0] + "  کلمه درست: " + expected + " ⭐";
    else if (wrong) el.textContent = "تو نوشتی «" + wrong + "»  —  درست: «" + expected + "»";
    else el.textContent = shuffle(PRAISE_BAD)[0] + " شکل درست: " + expected;
  };
})();
