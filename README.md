# دیکته آدرین

اپ روخوانی و دیکته فارسی برای آدرین، کلاس دوم.

سایت استاتیک است. برای میکروفون باید روی HTTPS باشد (Cloudflare Pages همین را می‌دهد).

## ساختار

- `index.html` رابط
- `app.js` منطق بازی
- `audio/` صداهای آماده
- `manifest.json` و `icon.svg`

## Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Create → Pages
2. Connect to Git
3. ریپوی `yavarimohammad-8160/adrian-dikte` را انتخاب کن
4. تنظیمات:
   - Framework preset: None
   - Build command: خالی
   - Build output directory: `/`
5. Save and Deploy

آدرس نهایی چیزی شبیه این می‌شود:

`https://adrian-dikte.pages.dev`
