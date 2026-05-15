document.addEventListener('DOMContentLoaded', () => {

  // 1. FITUR MENU HAMBURGER (KHUSUS LAYAR HP)// 
  const hamburger = document.getElementById('hamburger');
  const navContent = document.getElementById('nav-content');
  const navLinksList = document.querySelectorAll('.nav-links a');

  // Buka/Tutup menu samping saat ikon tiga garis diklik
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navContent.classList.toggle('active');
  });

  // Tutup menu secara otomatis saat salah satu link teks diklik
  navLinksList.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navContent.classList.remove('active');
    });
  });

  // 2. FITUR COLOR SWITCHER (Ubah Tema Warna) 
  const colorDots = document.querySelectorAll('.color-dot');
  const root = document.documentElement; // Mengakses elemen :root di CSS

  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      // Hapus status 'active' dari semua titik warna
      colorDots.forEach(d => d.classList.remove('active'));
      
      // Tambahkan status 'active' ke titik yang baru saja diklik
      dot.classList.add('active');
      
      // Ambil kode warna (Hue) dari atribut data-hue HTML dan kirim ke variabel CSS
      const newHue = dot.getAttribute('data-hue');
      root.style.setProperty('--hue', newHue);
    });
  });

  // 3. fitur tab (Berpindah Konten Solusi) //
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Matikan semua tombol dan sembunyikan semua konten tab
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Nyalakan tombol yang diklik
      btn.classList.add('active');
      
      // Tampilkan konten yang sesuai dengan ID data-target
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // 4. FITUR SCROLL REVEAL (Efek Muncul Perlahan)// 
  const revealElements = document.querySelectorAll('.reveal');
  
  // Menggunakan IntersectionObserver agar ringan di HP
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Jika elemen mulai terlihat di layar pengguna
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Hanya dijalankan 1x agar tidak berat
      }
    });
  }, {
    threshold: 0.15, // Memicu animasi saat 15% bagian elemen sudah terlihat
    rootMargin: "0px 0px -50px 0px" // Sedikit margin dari bawah
  });

  // Daftarkan semua elemen dengan class .reveal ke dalam observer
  revealElements.forEach(el => revealObserver.observe(el));
});