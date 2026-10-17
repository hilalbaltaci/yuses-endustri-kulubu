# YUSES Kulüp Web Sitesi

React + Vite ile hazırlanmış, YUSES 2025–2026 tanıtım dosyasındaki içeriklere dayanan bir web sitesi başlangıç projesidir.

## Çalıştırma
1. VS Code ile **package.json dosyasının bulunduğu klasörü** açın.
2. Terminal > New Terminal seçin.
3. `npm install`
4. `npm run dev`
5. Terminalde görünen yerel bağlantıyı tarayıcıda açın.

## İçerik düzenleme
- Başlangıç etkinlikleri: `src/data.js`
- Logo: `src/assets/yuses-logo.png`
- Görsel düzen ve renkler: `src/styles.css`
- Tarayıcı üzerinden etkinlik eklemek/düzenlemek/silmek: menüdeki `İçerik yönetimi`

## Önemli notlar
- PDF'de bulunmayan etkinlik tarihleri uydurulmamıştır; ilgili alanlarda tarih bilgisi eklenecek yazmaktadır.
- Demo yönetim ekranı içerikleri aynı tarayıcının localStorage alanında saklar. Gerçek çok kullanıcılı yönetim ve kimlik doğrulama için sunucu/veritabanı gerekir.
- Etkinlik fotoğrafları şu an örnek çevrimiçi fotoğraflardır. Gerçek YUSES etkinlik fotoğraflarıyla değiştirebilirsiniz.
- Instagram adresi tanıtım dosyasındaki `@yusesyeditepe` hesabına göre eklenmiştir.
- Yayına almadan önce etkinlik bilgilerini ve kulüp tarafından onaylanmış iletişim bilgilerini kontrol edin.

## Derleme kontrolü
`npm run build`
