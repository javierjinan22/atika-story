# Cerita Cinta — Interactive Storytelling

Satu halaman web (HTML + CSS + JavaScript murni, tanpa build/npm).

```
atika-story/
├── index.html      → kerangka halaman
├── style.css       → tampilan  (warna & font ada di blok :root paling atas)
├── script.js       → logika    (SEMUA teks, foto, musik, WhatsApp ada di blok CONFIG paling atas)
└── assets/
    ├── foto1.jpg … foto4.jpg      → foto di timeline (foto4 = poster video)
    ├── video-kita.mp4             → klip pendek di "Bab empat"
    ├── galeri-1.jpg … galeri-6.jpg→ galeri geser "Potret Kita"
    └── westlife-i-lay-my-love-on-you.mp3 → hanya untuk mode 'file' (belum ada — taruh file lagunya di sini)
```

## 3 hal wajib sebelum dikirim
1. **Nomor WhatsApp** → `script.js`, `CONFIG.whatsapp.number`
   Format internasional tanpa `+` dan tanpa `0` di depan. Contoh: `6281234567890`.
2. **Lagu** → atur `CONFIG.music.mode` di `script.js`:
   - `'preview'` (bawaan) → cuplikan resmi Apple Music **diputar otomatis** saat "Buka Kenangan Kita"
     ditekan, tanpa tampilan pemutar (hanya tombol musik kecil di pojok kanan bawah). Isi
     `CONFIG.music.appleMusicUrl` dengan link LAGU dari Apple Music (harus ada `?i=…`). Cuplikannya
     pendek dan diulang, bukan lagu penuh. Kalau cuplikan gagal diambil, halaman otomatis memakai
     kartu pemutar Apple Music di bagian surat.
   - `'file'` → lagu **penuh** dari file MP3 milikmu: simpan sebagai
     `assets/westlife-i-lay-my-love-on-you.mp3` (atau ubah `CONFIG.music.src`). Otomatis & tanpa
     tampilan pemutar. Opsi lain: `startAt`, `volume`, `fadeMs`, `toastMs`.
   - `'apple'` → hanya kartu pemutar Apple Music di bagian surat; harus ditekan manual
     (pemutar iframe Apple tidak bisa dijalankan dari tombol di halaman ini).
3. **Ceritakan yang sebenarnya** → ubah teks di `CONFIG.memories.timeline` dan `CONFIG.letter.paragraphs`.
   Teks bawaan sengaja dibuat umum. Cerita yang spesifik (tempat, tanggal, hal lucu yang cuma kalian tahu) jauh lebih mengena.

## Cara mengganti
| Yang ingin diganti        | Lokasi                                              |
|---------------------------|-----------------------------------------------------|
| Nama pengirim / penerima  | `CONFIG.sender`, `CONFIG.receiver` (+ versi "Short")|
| Teks tiap bagian          | `CONFIG.hero`, `.memories`, `.letter`, `.proposal`  |
| Foto timeline             | `CONFIG.memories.timeline[i].media.src`             |
| Potongan foto di bingkai  | `ratio` (mis. `'4 / 3'`) dan `focus` (mis. `'50% 40%'`) |
| Foto galeri               | `CONFIG.memories.gallery.items`                     |
| Kecepatan ketikan surat   | `CONFIG.letter.speed` (ms per huruf)                |
| Surat muncul per paragraf | `CONFIG.letter.mode = 'fade'`                       |
| Warna emas / latar / font | blok `:root` di `style.css`                         |

Di dalam teks boleh memakai `{receiver}`, `{receiverShort}`, `{sender}`, `{senderShort}`.

## Menjalankan di VS Code
Pasang ekstensi **Live Server** → klik kanan `index.html` → *Open with Live Server*.
(Bisa juga membuka `index.html` langsung, tetapi sebagian browser membatasi audio/video dari file lokal.)

## Deploy
- **Netlify**: buka app.netlify.com/drop, lalu seret seluruh folder ini.
- **Vercel**: `npm i -g vercel`, lalu jalankan `vercel` di dalam folder ini (framework: *Other*).
- **GitHub Pages**: unggah isi folder ke repo, aktifkan Pages.

Tips: beri alamat yang tidak mudah ditebak, dan buka sekali lewat HP sendiri sebelum dikirim.
Halaman ini sudah diberi `noindex` agar tidak muncul di Google.

## Catatan teknis
- Font (Google Fonts) dan konfeti (canvas-confetti) dimuat dari CDN → perlu internet. Jika gagal, halaman tetap berjalan dengan font cadangan / tanpa konfeti.
- Musik hanya bisa mulai setelah ada ketukan pengguna (aturan browser), karena itu musik dinyalakan oleh tombol "Buka Kenangan Kita".
- Mendukung `prefers-reduced-motion` (animasi dikurangi otomatis).
- Metadata foto (termasuk lokasi GPS) sudah dihapus dari semua file di `assets/`.
