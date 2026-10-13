/* =====================================================================
   1) KONFIGURASI  ✏️  — SEMUA yang perlu kamu ganti ada di blok ini
   ---------------------------------------------------------------------
   • Teks boleh memakai {receiver} {receiverShort} {sender} {senderShort}
     → otomatis diganti nama di bawah ini.
   • Foto  : taruh di folder /assets lalu ubah "src" (mis. assets/foto1.jpg)
   • Musik : mode 'preview' → cuplikan Apple Music otomatis (tempel link lagu di music.appleMusicUrl)
             mode 'file'    → lagu penuh dari MP3 di assets/ (ubah music.src)
             mode 'apple'   → kartu pemutar Apple Music (diputar manual)
   • WhatsApp : isi nomor Javier format internasional, tanpa "+" / "0" depan
                (contoh: 6281234567890)
   ===================================================================== */
const CONFIG = {
  sender: 'Javier Jinan',
  senderShort: 'Javier',
  receiver: 'Atika Febriani',
  receiverShort: 'Atika',

  whatsapp: {
    number: '6282291438538',   // ← GANTI dengan nomor WhatsApp Javier
    messageYes:
      'Halo {senderShort} Aku sudah baca semuanya… dan jawabanku: YA, aku mau jadi pacarmu.  — {receiverShort}',
    messageNeedTime:
      'Halo {senderShort}, terima kasih sudah jujur sama aku. Aku butuh sedikit waktu untuk menjawab, ya  — {receiverShort}',
  },

  music: {
    /* mode:
       'preview' → cuplikan resmi Apple Music diputar OTOMATIS saat "Buka Kenangan Kita" ditekan,
                   tanpa tampilan pemutar (hanya tombol musik kecil di pojok). Cuplikan pendek &
                   diulang. Jika cuplikan gagal diambil, otomatis memakai kartu Apple Music.
       'file'    → lagu penuh dari file MP3 milikmu (assets/…mp3), juga otomatis & tanpa pemutar.
       'apple'   → hanya kartu pemutar Apple Music di bagian surat (harus ditekan manual). */
    mode: 'preview',

    // ← GANTI dengan link lagu dari Apple Music (Bagikan → Salin Tautan). Harus link LAGU (ada "?i=").
    appleMusicUrl: 'https://music.apple.com/id/album/i-lay-my-love-on-you-remix/255641168?i=255642123',
    previewUrl: '',                 // (opsional) alamat audio cuplikan langsung; kosongkan = diambil otomatis

    title: 'I Lay My Love On You (Remix)',   // tampil di label "Sedang diputar"
    artist: 'Westlife',
    volume: 0.55,                   // 0.0 – 1.0
    fadeMs: 2500,                   // lama fade-in saat mulai
    toastMs: 5000,                  // lama label judul lagu tampil (0 = tidak tampil)

    /* ----- khusus mode 'file' ----- */
    src: 'assets/westlife-i-lay-my-love-on-you.mp3',  // ← nama file lagu di folder assets
    startAt: 0,                     // detik ke berapa lagu mulai (mis. 28 untuk melompati intro)

    /* ----- teks kartu Apple Music (mode 'apple' / cadangan mode 'preview') ----- */
    apple: {
      label: 'Lagu untukmu',
      hint: 'Tekan play, lalu buka amplopnya 💛',
      height: 150,                               // tinggi pemutar (px)
      linkText: 'Buka di aplikasi Apple Music',
      note: 'Masuk ke Apple Music di perangkatmu agar lagunya terputar penuh.',
    },
  },

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: 'A Special Message for',
    lead: '…dari seseorang yang diam-diam menyimpan banyak kata untukmu.',
    button: 'Buka Kenangan Kita',
  },

  /* ---------- SECTION 1: MEMORY LANE ---------- */
  memories: {
    title: 'Memory Lane',
    sub: 'Beberapa potongan cerita yang selalu membuatku tersenyum.',

    /* Tambah / hapus item sesuka hati. Ratio & focus mengatur potongan foto di bingkai. */
    timeline: [
      {
        label: 'Bab satu',
        title: 'Momen Pertama Kenal',
        text: 'Awalnya hanya sebuah sapaan sederhana. Aku belum tahu bahwa perkenalan kecil itu akan jadi salah satu cerita yang paling kusukai.',
        caption: 'Awal cerita',
        media: { type: 'image', src: 'assets/foto1.jpg', ratio: '3 / 4', focus: '50% 85%' },   // ← foto 1
      },
      {
        label: 'Bab dua',
        title: 'Momen Paling Berkesan',
        text: 'Ada hari-hari yang lewat begitu saja, dan ada hari yang menempel di ingatan. Hari bersamamu selalu yang kedua: penuh tawa tanpa alasan.',
        caption: 'Hari yang hangat',
        media: { type: 'image', src: 'assets/foto2.jpg', ratio: '4 / 3', focus: '58% 40%' },   // ← foto 2
      },
      {
        label: 'Bab tiga',
        title: 'Alasan {receiverShort} Begitu Spesial',
        text: 'Bukan karena satu hal besar, tapi karena banyak hal kecil: caramu tersenyum, caramu peduli, dan caramu membuat hari yang berat terasa lebih ringan.',
        caption: 'Selalu nyaman',
        media: { type: 'image', src: 'assets/foto3.jpg', ratio: '4 / 3', focus: '60% 38%' },   // ← foto 3
      },
      {
        label: 'Bab empat',
        title: 'Dan Hari Ini',
        text: 'Setelah semua cerita itu, aku ingin menulis bab yang baru. Bukan sendirian, tapi bersamamu.',
        caption: 'Bab selanjutnya?',
        // type 'video' juga bisa (muted & loop). "poster" = gambar sebelum video diputar.
        media: { type: 'video', src: 'assets/video-kita.mp4', poster: 'assets/foto4.jpg', ratio: '3 / 2', focus: '48% 50%' },
      },
    ],

    gallery: {
      title: 'Potret Kita',
      sub: 'Geser untuk melihat lebih banyak.',
      items: [                       // ← ganti / tambah foto galeri
        { src: 'assets/galeri-1.jpg', alt: 'Kita berdua, selfie' },
        { src: 'assets/galeri-2.jpg', alt: 'Kita berdua di toko' },
        { src: 'assets/galeri-3.jpg', alt: 'Kita berdua di luar ruangan' },
        { src: 'assets/galeri-4.jpg', alt: 'Kita berdua di photo booth' },
        { src: 'assets/galeri-5.jpg', alt: 'Kita berdua memberi salam' },
        { src: 'assets/galeri-6.jpg', alt: 'Kita berdua berpose' },
      ],
    },
    next: 'Ada sebuah surat untukmu',
  },

  /* ---------- SECTION 2: SURAT ---------- */
  letter: {
    title: 'Pesan dari Hati',
    sub: 'Ketuk amplopnya, lalu baca pelan-pelan.',
    hint: 'Ketuk untuk membuka',
    greeting: 'Untuk {receiver},',
    paragraphs: [
      'Aku tidak pandai merangkai kata, tapi malam ini aku ingin jujur. Sejak mengenalmu, hari-hariku terasa lebih hangat dan lebih berwarna dari sebelumnya.',
      'Kamu punya cara sederhana untuk membuat orang di sekitarmu merasa dihargai. Senyummu, tawamu, dan caramu menjadi dirimu sendiri adalah hal-hal yang diam-diam selalu kutunggu.',
      'Aku sadar, perasaan ini bukan sekadar kagum. Aku ingin lebih sering ada di dekatmu: mendengar ceritamu, menemani harimu yang baik maupun yang melelahkan, dan tumbuh bersama dengan cara yang baik.',
      'Aku tidak menjanjikan hal yang sempurna. Tapi aku berjanji untuk tulus, menghargaimu, dan menjagamu dengan sepenuh hati.',
      'Terima kasih sudah membaca sampai sini. Ada satu pertanyaan yang ingin kuajukan setelah ini…',
    ],
    signLine: 'Dengan sepenuh hati,',
    signName: '{sender}',
    mode: 'typewriter',   // 'typewriter' (diketik) atau 'fade' (muncul per paragraf)
    speed: 26,            // ms per huruf
    pause: 220,           // jeda tambahan di tanda baca
    skip: 'Lewati ketikan',
    next: 'Lanjutkan',
  },

  /* ---------- SECTION 3: THE MOMENT OF TRUTH ---------- */
  proposal: {
    eyebrow: 'Satu pertanyaan, satu hati',
    name: '{receiver},',                         // baris emas
    ask: 'maukah kamu jadi pacar {sender}?',
    english: '“{receiver}, will you be my girlfriend?”',
    yes: 'Ya, I would love to 💛',
    no: 'Maaf, belum bisa',

    // Tulisan tombol "belum bisa" berganti tiap kali mencoba kabur
    noLabels: ['Maaf, belum bisa', 'Yakin? 🥺', 'Coba pikir lagi…', 'Beneran? 🥹', 'Hampir kena 😆', 'Tombolnya capek, lho 😅'],
    hints: [
      'Eh, tombolnya malu-malu 😆',
      'Kok kabur? 🙈',
      'Sepertinya hatimu sudah tahu jawabannya 💛',
      'Tombol “YA” makin besar, lho 👀',
      'Dia memang susah ditangkap 😄',
    ],

    popup: {
      at: [4, 10],   // pop-up muncul pada percobaan ke-4 dan ke-10
      title: 'Coba pikirkan sekali lagi yuk? 😉',
      text: 'Tombol itu kayaknya tahu sesuatu yang belum kamu akui. 💛',
      think: 'Oke, aku pikir lagi',
      needTime: 'Aku butuh waktu 🙏',
      // Jalan keluar yang sopan jika jawabannya memang "belum":
      needTimeTitle: 'Terima kasih sudah jujur 🤍',
      needTimeText: 'Tidak apa-apa. Ambil waktu sebanyak yang kamu perlu, {senderShort} akan tetap menghargaimu.',
      needTimeWa: 'Kabari {senderShort} lewat WhatsApp',
      back: 'Kembali ke pertanyaan',
    },

    success: {
      title: 'Thank you for choosing me, {receiverShort}! ❤️',
      sign: '— {sender}',
      text: 'Terima kasih sudah membuka hatimu. Aku akan menjaganya baik-baik, hari ini dan seterusnya.',
      wa: 'Kabari {senderShort} di WhatsApp 💬',
      replay: 'Nyalakan kembang api lagi ✨',
    },
  },
};

/* =====================================================================
   2) HELPER
   ===================================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const rand = (a, b) => a + Math.random() * (b - a);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fmt = (s) =>
  String(s)
    .replaceAll('{receiverShort}', CONFIG.receiverShort)
    .replaceAll('{receiver}', CONFIG.receiver)
    .replaceAll('{senderShort}', CONFIG.senderShort)
    .replaceAll('{sender}', CONFIG.sender);

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const setText = (sel, text) => { const el = $(sel); if (el) el.textContent = fmt(text); };
const goTo = (el) => el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });

function waUrl(message) {
  const raw = String(CONFIG.whatsapp.number);
  const digits = raw.replace(/\D/g, '');
  const valid = !/x/i.test(raw) && digits.length >= 8;
  if (!valid) console.warn('[Cerita Cinta] Nomor WhatsApp belum diisi di CONFIG.whatsapp.number — link akan membuka pilihan kontak.');
  return `https://wa.me/${valid ? digits : ''}?text=${encodeURIComponent(fmt(message))}`;
}

/* =====================================================================
   3) ISI TEKS DARI CONFIG
   ===================================================================== */
function applyCopy() {
  const C = CONFIG;
  document.title = fmt('Untuk {receiver} — dari {sender}');

  // hero
  setText('#hero-eyebrow', C.hero.eyebrow);
  $('#hero-name').innerHTML = C.receiver.split(/\s+/).map((w) => `<span class="w gold-text">${esc(w)}</span>`).join('');
  setText('#hero-lead', C.hero.lead);
  setText('#btn-open', C.hero.button);

  // memories
  setText('#memories-title', C.memories.title);
  setText('#memories-sub', C.memories.sub);
  setText('#gallery-title', C.memories.gallery.title);
  setText('#gallery-sub', C.memories.gallery.sub);
  setText('#btn-to-letter', C.memories.next);

  // letter
  setText('#letter-title', C.letter.title);
  setText('#letter-sub', C.letter.sub);
  setText('#envelope-hint', C.letter.hint);
  setText('#letter-greeting', C.letter.greeting);
  setText('#letter-sign-line', C.letter.signLine);
  setText('#letter-sign-name', C.letter.signName);
  setText('#btn-skip', C.letter.skip);
  setText('#btn-to-proposal', C.letter.next);
  $('#env-seal').textContent = `${C.senderShort[0]}&${C.receiverShort[0]}`;

  // proposal
  const P = C.proposal;
  setText('#proposal-eyebrow', P.eyebrow);
  setText('#proposal-name', P.name);
  setText('#proposal-ask', P.ask);
  setText('#proposal-en', P.english);
  setText('#btn-yes', P.yes);
  setText('#btn-no', P.no);

  // celebration
  setText('#cel-title', P.success.title);
  setText('#cel-sign', P.success.sign);
  setText('#cel-text', P.success.text);
  setText('#wa-link', P.success.wa);
  setText('#btn-replay', P.success.replay);
  $('#wa-link').href = waUrl(C.whatsapp.messageYes);
}

/* =====================================================================
   4) PARTIKEL CAHAYA EMAS (canvas)
   ===================================================================== */
function initParticles() {
  const canvas = $('#particles');
  const ctx = canvas.getContext('2d');
  const palette = ['212,175,55', '240,217,138', '224,169,109', '247,231,206'];
  let w = 0, h = 0, dpr = 1, parts = [], running = true, last = 0;

  function make(initial) {
    const c = palette[(Math.random() * palette.length) | 0];
    return {
      x: rand(0, w), y: initial ? rand(0, h) : h + 20,
      r: rand(.6, 2.1), vy: rand(9, 26), vx: rand(-4, 4),          // px per detik
      a: rand(.25, .85), ph: rand(0, Math.PI * 2), sp: rand(.4, 1.2), c,
    };
  }
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nw = window.innerWidth, nh = window.innerHeight;
    if (nw === w && Math.abs(nh - h) < 140) return;          // abaikan naik-turunnya address bar HP
    w = nw; h = nh;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = clamp(Math.round((w * h) / 15000), 26, 80);
    while (parts.length < target) parts.push(make(true));
    parts.length = target;
  }
  function frame(t) {
    if (!running) return;
    const dt = Math.min(48, t - last || 16); last = t;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y -= p.vy * dt / 1000;
      p.x += p.vx * dt / 1000 + Math.sin(t / 1000 * p.sp + p.ph) * .09;
      if (p.y < -20) Object.assign(p, make(false), { x: rand(0, w) });
      const tw = .55 + .45 * Math.sin(t / 1000 * p.sp * 1.6 + p.ph);
      const a = p.a * tw;
      ctx.beginPath(); ctx.fillStyle = `rgba(${p.c},${a * .14})`; ctx.arc(p.x, p.y, p.r * 4.2, 0, 6.2832); ctx.fill();
      ctx.beginPath(); ctx.fillStyle = `rgba(${p.c},${a})`;      ctx.arc(p.x, p.y, p.r, 0, 6.2832);      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running && !reduceMotion) requestAnimationFrame(frame);
  });
  if (reduceMotion) { frame(0); running = false; } else requestAnimationFrame(frame);
}

/* =====================================================================
   5) MUSIK
   ===================================================================== */
const music = (() => {
  const audio = $('#bgm');
  const btn = $('#music');
  const M = CONFIG.music;
  if (M.mode === 'apple') {                    // pemutar iframe tidak bisa dikontrol dari sini
    btn.hidden = true;
    return { start() {} };
  }
  const usePreview = M.mode === 'preview';
  const songName = `${M.artist} — ${M.title}`;
  let playing = false, failed = false, userPaused = false, ready = !usePreview;
  let wantStart = false, fadeTimer = null, toastTimer = null, seeked = false;

  // Label kecil "Sedang diputar" di samping tombol musik (dibuat lewat JS, tidak perlu ubah HTML)
  const toast = document.createElement('div');
  toast.className = 'music-toast';
  toast.setAttribute('aria-hidden', 'true');
  toast.innerHTML = '<span class="music-toast__k">Sedang diputar</span><span class="music-toast__t"></span>';
  toast.querySelector('.music-toast__t').textContent = `♪ ${songName}`;
  btn.insertAdjacentElement('afterend', toast);

  function showToast() {
    if (!M.toastMs) return;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-on'), M.toastMs);
  }
  const setUi = (on) => {
    btn.classList.toggle('is-playing', on);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? `Jeda musik: ${songName}` : `Putar musik: ${songName}`);
    btn.title = songName;
  };
  function fadeTo(target, ms, done) {
    clearInterval(fadeTimer);
    const from = audio.volume, steps = Math.max(1, Math.round(ms / 50));
    let i = 0;
    fadeTimer = setInterval(() => {
      i++;
      audio.volume = clamp(from + (target - from) * (i / steps), 0, 1);
      if (i >= steps) { clearInterval(fadeTimer); if (done) done(); }
    }, 50);
  }
  // Lompat ke detik "startAt" sekali saja (hanya mode file)
  function seekOnce() {
    if (seeked || usePreview || !M.startAt) { seeked = true; return; }
    const go = () => { try { audio.currentTime = M.startAt; } catch (e) {} seeked = true; };
    if (audio.readyState >= 1) go(); else audio.addEventListener('loadedmetadata', go, { once: true });
  }
  async function play() {
    if (failed) return;
    try {
      audio.volume = 0;
      seekOnce();
      await audio.play();
      playing = true; setUi(true); showToast();
      fadeTo(M.volume, M.fadeMs);
    } catch (err) {
      playing = false; setUi(false);           // diblokir browser → tombol musik tetap bisa ditekan manual
    }
  }
  function pause() {
    playing = false; setUi(false);
    toast.classList.remove('is-on');
    fadeTo(0, 500, () => audio.pause());
  }
  // Cuplikan Apple gagal → pakai kartu pemutar Apple Music sebagai cadangan
  function fallbackToCard(why) {
    failed = true; playing = false; setUi(false);
    btn.hidden = true; toast.classList.remove('is-on');
    console.warn(`[musik] ${why} → memakai kartu Apple Music.`);
    initSongCard(true);
  }

  /* ---- Mengambil alamat cuplikan resmi lewat iTunes Search API (lookup) ---- */
  function trackInfo(raw) {
    try {
      const u = new URL(String(raw || '').trim());
      const id = u.searchParams.get('i') || (u.pathname.match(/\/song\/[^/]+\/(\d+)/) || [])[1];
      const cc = (u.pathname.split('/')[1] || '').toLowerCase();
      return { id: /^\d+$/.test(id || '') ? id : null, cc: /^[a-z]{2}$/.test(cc) ? cc : 'us' };
    } catch (e) { return { id: null, cc: 'us' }; }
  }
  const okPreview = (u) => {
    try { const x = new URL(u); return x.protocol === 'https:' && /(^|\.)(apple\.com|mzstatic\.com)$/.test(x.hostname); }
    catch (e) { return false; }
  };
  const pickPreview = (j) => {
    const r = ((j && j.results) || []).find((x) => x && x.previewUrl && okPreview(x.previewUrl));
    return r ? r.previewUrl : null;
  };
  function lookupFetch(url) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 7000);
    // hasil: alamat cuplikan | null (API menjawab tapi tidak ada cuplikan) | false (gagal/diblokir → coba JSONP)
    return fetch(url, { signal: ctl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))).then(pickPreview)
      .catch(() => false)
      .finally(() => clearTimeout(t));
  }
  function lookupJsonp(url) {                   // cadangan jika fetch diblokir CORS
    return new Promise((resolve) => {
      const cb = `__itunes_${Date.now().toString(36)}`;
      const sc = document.createElement('script');
      let t;
      const done = (v) => { clearTimeout(t); delete window[cb]; sc.remove(); resolve(v); };
      t = setTimeout(() => done(null), 7000);
      window[cb] = (j) => done(pickPreview(j));
      sc.onerror = () => done(null);
      sc.src = `${url}&callback=${cb}`;
      document.head.appendChild(sc);
    });
  }
  async function findPreview() {
    if (M.previewUrl) return M.previewUrl;
    const { id, cc } = trackInfo(M.appleMusicUrl);
    if (!id) return null;
    const url = `https://itunes.apple.com/lookup?id=${id}&country=${cc}`;
    const viaFetch = await lookupFetch(url);
    return viaFetch === false ? lookupJsonp(url) : viaFetch;
  }

  setUi(false);
  audio.addEventListener('error', () => {
    if (usePreview) { fallbackToCard('cuplikan tidak bisa diputar'); return; }
    failed = true; playing = false; setUi(false);
    btn.classList.add('is-error');
    btn.title = `File musik belum ditemukan: ${M.src}`;
    toast.classList.remove('is-on');
  });

  if (usePreview) {
    audio.preload = 'auto';
    findPreview().then((url) => {               // disiapkan sejak halaman dibuka, supaya siap saat diklik
      if (!url) { fallbackToCard('cuplikan Apple Music tidak ditemukan'); return; }
      audio.src = url; ready = true;
      if (wantStart && !userPaused && !playing) play();
    });
  } else {
    audio.src = M.src;
  }

  btn.addEventListener('click', () => {
    if (playing) { userPaused = true; pause(); return; }
    userPaused = false;
    if (!ready) { wantStart = true; return; }
    play();
  });

  return {
    start() {
      if (userPaused || playing || failed) return;
      if (!ready) { wantStart = true; return; }   // cuplikan belum siap → putar begitu siap
      play();
    },
  };
})();

/* =====================================================================
   5b) KARTU APPLE MUSIC (mode 'apple')
   ===================================================================== */
// Menerima link berbagi (music.apple.com) maupun link embed; menolak host lain.
function appleUrls(raw) {
  try {
    const u = new URL(String(raw || '').trim());
    if (u.protocol !== 'https:') return null;
    if (u.hostname !== 'music.apple.com' && u.hostname !== 'embed.music.apple.com') return null;
    return {
      embed: `https://embed.music.apple.com${u.pathname}${u.search}`,
      open: `https://music.apple.com${u.pathname}${u.search}`,
    };
  } catch (e) { return null; }
}

let songCardBuilt = false;
function initSongCard(force = false) {
  const M = CONFIG.music;
  if (songCardBuilt || (M.mode !== 'apple' && !force)) return;
  const urls = appleUrls(M.appleMusicUrl);
  if (!urls) { console.warn('[musik] appleMusicUrl tidak valid:', M.appleMusicUrl); return; }
  const A = M.apple;

  const card = document.createElement('aside');
  card.className = 'songcard';
  card.setAttribute('aria-label', A.label);

  const k = document.createElement('p');  k.className = 'songcard__k'; k.textContent = A.label;
  const h = document.createElement('p');  h.className = 'songcard__h'; h.textContent = A.hint;

  const frame = document.createElement('div');
  frame.className = 'songcard__frame';
  const ifr = document.createElement('iframe');
  ifr.src = urls.embed;
  ifr.title = `${A.label} — Apple Music`;
  ifr.height = String(A.height || 150);
  ifr.loading = 'lazy';
  ifr.referrerPolicy = 'strict-origin-when-cross-origin';
  ifr.allow = 'autoplay *; encrypted-media *; fullscreen *; clipboard-write';
  ifr.setAttribute('sandbox', 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation');
  frame.appendChild(ifr);

  const a = document.createElement('a');
  a.className = 'songcard__link'; a.href = urls.open; a.target = '_blank'; a.rel = 'noopener';
  a.textContent = A.linkText;

  const n = document.createElement('p');  n.className = 'songcard__note'; n.textContent = A.note;

  card.append(k, h, frame, a, n);
  $('#letter .chapter__head').after(card);
  songCardBuilt = true;
}

/* =====================================================================
   6) MEMORY LANE (timeline + galeri)
   ===================================================================== */
function buildMedia(m, alt, wrap) {
  let el;
  if (m.type === 'video') {
    el = document.createElement('video');
    el.muted = true; el.loop = true; el.playsInline = true; el.preload = 'metadata';
    el.setAttribute('muted', ''); el.setAttribute('playsinline', ''); el.setAttribute('aria-label', alt);
    if (m.poster) el.poster = m.poster;
    el.src = m.src;
  } else {
    el = new Image();
    el.alt = alt; el.loading = 'lazy'; el.decoding = 'async'; el.draggable = false;
    el.src = m.src;
  }
  el.addEventListener('error', () => {
    // video gagal diputar / belum ada → tampilkan fotonya (poster) saja
    if (m.type === 'video' && m.poster && !el.dataset.fallback) {
      const img = new Image();
      img.alt = alt; img.decoding = 'async'; img.draggable = false;
      img.dataset.fallback = '1';
      img.addEventListener('error', () => {
        wrap.classList.add('is-missing');
        wrap.dataset.missing = `Ganti dengan fotomu\n${m.poster}`;
      });
      img.src = m.poster;
      el.replaceWith(img);
      return;
    }
    wrap.classList.add('is-missing');
    wrap.dataset.missing = `Ganti dengan fotomu\n${m.src}`;
  });
  return el;
}

function renderTimeline() {
  const host = $('#timeline-items');
  CONFIG.memories.timeline.forEach((item, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const art = document.createElement('article');
    art.className = `tl-item tl-item--${side}`;
    const m = item.media;
    const tilt = m.tilt ?? (side === 'left' ? -2 : 2);

    art.innerHTML = `
      <span class="tl-dot" aria-hidden="true"></span>
      <figure class="polaroid" style="--tilt:${tilt}deg">
        <div class="polaroid__photo" style="--ratio:${esc(m.ratio || '4 / 5')};--focus:${esc(m.focus || '50% 50%')}"></div>
        <figcaption>${esc(fmt(item.caption || ''))}</figcaption>
      </figure>
      <div class="tl-text">
        <span class="tl-label">${esc(fmt(item.label))}</span>
        <h3 class="tl-title">${esc(fmt(item.title))}</h3>
        <p class="tl-copy">${esc(fmt(item.text))}</p>
      </div>`;
    const wrap = $('.polaroid__photo', art);
    wrap.appendChild(buildMedia(m, fmt(item.title), wrap));
    host.appendChild(art);
  });
}

function renderGallery() {
  const track = $('#gallery-track');
  CONFIG.memories.gallery.items.forEach((g) => {
    const box = document.createElement('div');
    box.className = 'gallery__item';
    box.appendChild(buildMedia({ type: 'image', src: g.src }, fmt(g.alt || 'Foto kita'), box));
    track.appendChild(box);
  });
  // geser dengan mouse (drag) di desktop
  let down = false, sx = 0, sl = 0;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    down = true; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-drag');
  });
  window.addEventListener('pointermove', (e) => { if (down) track.scrollLeft = sl - (e.clientX - sx); });
  window.addEventListener('pointerup', () => { down = false; track.classList.remove('is-drag'); });
}

function initMemoryObservers() {
  // item timeline: "tercetak" saat masuk layar
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.28 });
  $$('.tl-item').forEach((el) => io.observe(el));

  // video hanya berputar saat terlihat
  const vo = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
    });
  }, { threshold: 0.4 });
  $$('.tl-item video').forEach((v) => vo.observe(v));

  // garis emas yang "mengisi" mengikuti scroll
  const fill = $('#timeline-fill'), tl = $('#timeline');
  let ticking = false;
  const update = () => {
    ticking = false;
    if ($('#memories').hidden) return;
    const r = tl.getBoundingClientRect();
    fill.style.height = `${clamp((window.innerHeight * 0.65 - r.top) / r.height, 0, 1) * 100}%`;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update);
}

/* =====================================================================
   7) SURAT: amplop + efek ketik
   ===================================================================== */
let skipTyping = false;
let userScrolled = false;
let lastFollow = 0;

['wheel', 'touchmove'].forEach((ev) => window.addEventListener(ev, () => { userScrolled = true; }, { passive: true }));

function followCaret(el) {
  if (userScrolled) return;
  const now = performance.now();
  if (now - lastFollow < 320) return;
  lastFollow = now;
  const r = el.getBoundingClientRect();
  if (r.bottom > window.innerHeight * 0.78) {
    window.scrollBy({ top: r.bottom - window.innerHeight * 0.55, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}

async function typeLetter() {
  const L = CONFIG.letter;
  const body = $('#letter-body');
  const caret = document.createElement('span');
  caret.className = 'caret';
  userScrolled = false;                        // (skipTyping di-reset di showLetter, sebelum tombol lewati muncul)

  for (const raw of L.paragraphs) {
    const text = fmt(raw);
    const p = document.createElement('p');
    body.appendChild(p);

    if (skipTyping || reduceMotion) { p.textContent = text; continue; }
    if (L.mode === 'fade') {
      p.textContent = text; p.classList.add('fade-in');
      followCaret(p);
      await sleep(1500);
      continue;
    }
    const node = document.createTextNode('');
    p.append(node, caret);
    for (const ch of Array.from(text)) {          // Array.from → aman untuk emoji
      if (skipTyping) break;
      node.data += ch;
      followCaret(caret);
      await sleep(L.speed + (',.!?…'.includes(ch) ? L.pause : 0));
    }
    node.data = text;
    if (!skipTyping) await sleep(420);
  }
  caret.remove();
}

async function showLetter() {
  $('#envelope').hidden = true;
  $('#envelope-hint').hidden = true;
  const paper = $('#letter-paper');
  const skipBtn = $('#btn-skip');
  skipTyping = false;
  paper.hidden = false;
  skipBtn.hidden = false;
  paper.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });

  await sleep(reduceMotion ? 0 : 900);
  await typeLetter();

  skipBtn.hidden = true;
  $('#letter-sign').classList.add('is-shown');
  await sleep(reduceMotion ? 0 : 900);
  const next = $('#btn-to-proposal');
  next.hidden = false;
  next.style.animation = 'fadeIn 1.2s ease backwards, glow 3.4s ease-in-out 1.2s infinite';
}

function initLetter() {
  const env = $('#envelope');
  let opened = false;
  const open = () => {
    if (opened) return;
    opened = true;
    env.classList.add('is-open');
    env.setAttribute('aria-expanded', 'true');
    $('#envelope-hint').classList.add('is-hidden');
    setTimeout(() => env.classList.add('is-leaving'), reduceMotion ? 100 : 2000);
    setTimeout(showLetter, reduceMotion ? 300 : 2750);
  };
  env.addEventListener('click', open);
  env.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });
  $('#btn-skip').addEventListener('click', () => { skipTyping = true; });
}

/* =====================================================================
   8) MODAL, WHATSAPP, KONFETI
   ===================================================================== */
const modal = {
  el: null,
  open(title, text, actions) {
    $('#modal-title').textContent = fmt(title);
    $('#modal-text').textContent = fmt(text);
    const host = $('#modal-actions');
    host.innerHTML = '';
    actions.forEach((a) => {
      const node = document.createElement(a.href ? 'a' : 'button');
      node.className = `btn ${a.className || 'btn--gold'}`;
      node.textContent = fmt(a.label);
      if (a.href) { node.href = a.href; node.target = '_blank'; node.rel = 'noopener'; }
      else { node.type = 'button'; node.addEventListener('click', a.onClick); }
      host.appendChild(node);
    });
    this.el.hidden = false;
    const first = $('.btn', host);
    if (first) first.focus({ preventScroll: true });
  },
  close() { this.el.hidden = true; },
};

function fireConfetti() {
  if (typeof window.confetti !== 'function') return;     // CDN gagal dimuat → lewati saja
  const colors = ['#D4AF37', '#F0D98A', '#E0A96D', '#F7E7CE', '#9d7a1c', '#ffffff'];
  const base = { colors, zIndex: 9999, disableForReducedMotion: true };

  // ledakan utama
  window.confetti({ ...base, particleCount: 150, spread: 100, startVelocity: 48, origin: { x: .5, y: .62 } });

  // dua meriam dari sisi layar
  const end = Date.now() + 4200;
  (function cannons() {
    window.confetti({ ...base, particleCount: 5, angle: 60, spread: 62, origin: { x: 0, y: .78 } });
    window.confetti({ ...base, particleCount: 5, angle: 120, spread: 62, origin: { x: 1, y: .78 } });
    if (Date.now() < end) requestAnimationFrame(cannons);
  })();

  // kembang api emas
  let n = 0;
  const iv = setInterval(() => {
    window.confetti({
      ...base, particleCount: 64, spread: 360, startVelocity: 27, gravity: .65, decay: .93,
      scalar: .95, ticks: 95, origin: { x: rand(.15, .85), y: rand(.1, .45) },
    });
    if (++n >= 9) clearInterval(iv);
  }, 450);

  // hati emas (jika versi library mendukung)
  if (typeof window.confetti.shapeFromText === 'function') {
    const shapes = [
      window.confetti.shapeFromText({ text: '💛', scalar: 2 }),
      window.confetti.shapeFromText({ text: '✨', scalar: 2 }),
    ];
    setTimeout(() => window.confetti({ ...base, particleCount: 26, spread: 130, scalar: 2, shapes, origin: { x: .5, y: .75 } }), 700);
  }
}

/* =====================================================================
   9) THE MOMENT OF TRUTH
   ===================================================================== */
function initProposal() {
  const P = CONFIG.proposal;
  const sec = $('#proposal');
  const yes = $('#btn-yes'), no = $('#btn-no'), slot = $('#slot-no');
  const hint = $('#no-hint'), question = $('#proposal-question'), musicBtn = $('#music');

  modal.el = $('#modal');

  // --- menyalakan "lampu" saat bagian ini terlihat ---
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.3)) {
      sec.classList.add('is-lit');
      io.disconnect();
    }
  }, { threshold: [0.3, 0.6] });
  io.observe(sec);

  // --- tombol "belum bisa" yang menghindar ---
  let attempts = 0, floating = false, lastDodge = 0;
  const pointer = { x: -999, y: -999 };

  const overlap = (a, b, m = 0) =>
    !(a.right + m < b.left || a.left - m > b.right || a.bottom + m < b.top || a.top - m > b.bottom);

  function placeNo(x, y) {                         // x,y = koordinat viewport
    const pr = (no.offsetParent || document.body).getBoundingClientRect();
    no.style.left = `${x - pr.left}px`;
    no.style.top = `${y - pr.top}px`;
  }

  function dodge() {
    const now = performance.now();
    if (now - lastDodge < 380 || !sec.classList.contains('is-lit') || !modal.el.hidden) return;
    lastDodge = now;

    if (!floating) {                               // lepas dari alur layout, tapi sisakan ruangnya
      const r = no.getBoundingClientRect();
      slot.style.width = `${r.width}px`;
      slot.style.height = `${r.height}px`;
      no.classList.add('is-floating');
      floating = true;
      placeNo(r.left, r.top);
      void no.offsetWidth;                         // paksa reflow agar transisi berjalan
    }
    attempts++;

    // ganti label LEBIH DULU, supaya lebar tombol yang diukur sudah final
    no.textContent = fmt(P.noLabels[Math.min(attempts, P.noLabels.length - 1)]);

    // cari posisi baru yang jauh dari jari/kursor & tidak menutupi teks / tombol YA
    const w = no.offsetWidth, h = no.offsetHeight, pad = 14;
    const pr = (no.offsetParent || document.body).getBoundingClientRect();
    const minX = Math.max(pr.left, 0) + pad;
    const maxX = Math.min(pr.right, window.innerWidth) - pad - w;
    const minY = Math.max(pr.top, 0) + pad;
    const maxY = Math.min(pr.bottom, window.innerHeight) - pad - h;
    const avoid = [yes, question, musicBtn].map((e) => e.getBoundingClientRect());

    let best = null, bestD = -1;
    for (let i = 0; i < 40; i++) {
      const x = rand(minX, Math.max(minX, maxX)), y = rand(minY, Math.max(minY, maxY));
      const box = { left: x, top: y, right: x + w, bottom: y + h };
      if (avoid.some((a) => overlap(box, a, 12))) continue;
      const d = Math.hypot(x + w / 2 - pointer.x, y + h / 2 - pointer.y);
      if (d > bestD) { bestD = d; best = { x, y }; }
    }
    if (!best) best = { x: pointer.x < window.innerWidth / 2 ? maxX : minX, y: minY };
    placeNo(best.x, best.y);

    // tanggapan lucu: tombol YA membesar, ada bisikan kecil
    hint.textContent = fmt(P.hints[(attempts - 1) % P.hints.length]);
    yes.style.setProperty('--s', (1 + Math.min(attempts, 6) * 0.05).toFixed(2));
    if (P.popup.at.includes(attempts)) setTimeout(openThinkModal, 450);
  }

  function openThinkModal() {
    modal.open(P.popup.title, P.popup.text, [
      { label: P.popup.think, className: 'btn--gold', onClick: () => modal.close() },
      { label: P.popup.needTime, className: 'btn--text', onClick: openNeedTimeModal },
    ]);
  }
  function openNeedTimeModal() {
    modal.open(P.popup.needTimeTitle, P.popup.needTimeText, [
      { label: P.popup.needTimeWa, className: 'btn--gold', href: waUrl(CONFIG.whatsapp.messageNeedTime) },
      { label: P.popup.back, className: 'btn--text', onClick: () => modal.close() },
    ]);
  }

  // mouse: kabur sebelum sempat tersentuh
  document.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX; pointer.y = e.clientY;
    if (e.pointerType !== 'mouse' || !sec.classList.contains('is-lit')) return;
    const r = no.getBoundingClientRect();
    const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
    const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
    if (Math.hypot(dx, dy) < 70) dodge();
  });
  // sentuhan HP: kabur saat disentuh
  no.addEventListener('pointerdown', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; e.preventDefault(); dodge(); });
  no.addEventListener('click', (e) => { e.preventDefault(); dodge(); });   // keyboard / fallback

  // --- tombol YA ---
  yes.addEventListener('click', celebrate);

  function celebrate() {
    modal.close();
    $('#celebration').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#wa-link').focus({ preventScroll: true });
    fireConfetti();
  }
  $('#btn-replay').addEventListener('click', fireConfetti);

  // Esc menutup pop-up
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.el.hidden) modal.close(); });
}

/* =====================================================================
   10) ALUR UTAMA
   ===================================================================== */
function initFlow() {
  // Hero → Memory Lane (sekaligus memutar musik: klik = izin autoplay dari browser)
  $('#btn-open').addEventListener('click', () => {
    music.start();
    const sec = $('#memories');
    sec.hidden = false;
    sec.classList.add('is-entering');
    requestAnimationFrame(() => goTo(sec));
  });

  // Memory Lane → Surat
  $('#btn-to-letter').addEventListener('click', () => {
    const sec = $('#letter');
    sec.hidden = false;
    sec.classList.add('is-entering');
    requestAnimationFrame(() => goTo(sec));
  });

  // Surat → The Moment of Truth
  $('#btn-to-proposal').addEventListener('click', () => {
    const sec = $('#proposal');
    sec.hidden = false;
    requestAnimationFrame(() => goTo(sec));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyCopy();
  renderTimeline();
  renderGallery();
  initParticles();
  initMemoryObservers();
  initSongCard();
  initLetter();
  initProposal();
  initFlow();
});
