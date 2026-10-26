# 🍎 TumbuhRasa — Media Interaktif Pengenalan Buah untuk Anak (Usia 3–6 Tahun)

Aplikasi edukasi interaktif **TumbuhRasa** dirancang untuk membantu anak-anak usia 3–6 tahun mengenal **50 jenis buah** melalui ilustrasi gambar yang ceria, suara pelafalan Bahasa Indonesia yang benar-benar berfungsi, dan keterangan singkat yang mudah dipahami.

---

## ✨ Fitur Utama yang Telah Diimplementasikan

1. **Halaman Beranda Ramah Anak**
   - Menampilkan logo & nama **TumbuhRasa**, ilustrasi buah-buahan ceria yang bisa langsung ditekan, kalimat sambutan **"Yuk, Kenalan dengan Buah!"**, kalimat pendukung **"Pilih buah favoritmu dan dengarkan namanya!"**, serta tombol utama berukuran besar **"Mulai Belajar"**.

2. **Halaman Katalog 50 Jenis Buah Lengkap**
   - Menampilkan **seluruh 50 jenis buah** (Apel, Pisang, Jeruk, Mangga, Anggur, Semangka, Nanas, Melon, Stroberi, Kiwi, Alpukat, Blueberry, Raspberry, Blackberry, Ceri, Delima, Manggis, Leci, Rambutan, Durian, Salak, Duku, Langsat, Sirsak, Pepaya, Jambu biji, Jambu air, Buah naga, Nangka, Kelengkeng, Markisa, Kesemek, Plum, Aprikot, Persik, Pir, Anggur hijau, Anggur merah, Buah tin, Kurma, Lemon, Jeruk nipis/Lime, Jeruk Bali/Pomelo, Kumquat, Loquat, Matoa, Melon madu, Blewah, Kelapa, dan Sawo).
   - Setiap kartu buah memiliki **ilustrasi vektor (SVG) kustom berwarna**, nama buah dalam Bahasa Indonesia, nama alternatif (jika ada), dan penanda visual kartu yang sedang dipilih.
   - Dilengkapi **kolom pencarian aktif** (`"Cari nama buah..."`) dan filter kategori (**Semua Buah (50)**, **Buah Populer**, **Buah Lainnya**).
   - Tata letak grid responsif otomatis: **4 kolom** pada desktop, **3 kolom** pada tablet, dan **2 kolom** pada ponsel.

3. **Halaman Detail Buah (2 Kolom pada Desktop/Tablet & Vertikal pada Ponsel)**
   - **Sisi Kiri**: Gambar/ilustrasi buah berukuran besar yang dapat ditekan langsung untuk memutar suara nama buah.
   - **Sisi Kanan**: Nama buah berukuran besar, tombol **"🔊 Dengarkan Nama Buah"**, tombol **"🔁 Ulangi Suara"**, keterangan singkat 1–2 kalimat sederhana yang sesuai usia 3–6 tahun, serta tombol opsional **"✨ Lihat Fakta Menarik Buah Ini"** agar tampilan tidak terlalu padat.
   - Navigasi lengkap: **"← Kembali ke Daftar Buah"**, **"⬅️ Buah Sebelumnya"**, dan **"Buah Berikutnya ➡️"**.

4. **Sistem Audio Bahasa Indonesia yang Benar-Benar Berfungsi**
   - Menggunakan *Web Speech API* (`id-ID`) dengan efek suara pembuka lembut dan indikator status audio di layar.
   - Menghentikan suara sebelumnya secara otomatis saat pengguna berpindah buah atau halaman agar suara tidak bertumpuk.

---

## 🚀 Cara Menjalankan Aplikasi

1. **Lewat Localhost (Server Sudah Aktif)**:
   Buka **`http://localhost:3000`** di browser Anda.
2. **Lewat File Explorer**:
   Klik dua kali file [`index.html`](./index.html) di dalam folder `APLIKASI`.
