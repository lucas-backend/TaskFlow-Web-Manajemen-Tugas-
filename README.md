# TaskFlow – Task Management System

TaskFlow adalah aplikasi manajemen tugas modern yang dibangun menggunakan React. Website ini memungkinkan pengguna untuk mencatat, mengelola, dan memfilter tugas harian dengan antarmuka yang bersih dan responsif.

Demo Website: https://task-flow-web-manajemen-tugas.vercel.app/

## Fitur Utama

- **Manajemen Tugas Lengkap** – Tambah, edit, dan hapus tugas dengan mudah.
- **Kategori Dinamis** – Pisahkan tugas berdasarkan kategori Work, Personal, atau Urgent.
- **Sistem Pencarian Real-time** – Cari tugas tertentu melalui kolom pencarian secara instan.
- **Filter Kategori** – Tampilkan tugas berdasarkan kategori yang dipilih menggunakan tab filter.
- **Notifikasi Interaktif** – Feedback visual menggunakan `react-hot-toast` untuk setiap aksi pengguna.
- **Desain Modern** – Antarmuka menggunakan Tailwind CSS dengan skema warna Zinc yang elegan.

## Teknologi Yang Digunakan

| Teknologi           | Kegunaan                                                 |
| ------------------- | -------------------------------------------------------- |
| **React**           | Library utama untuk membangun antarmuka pengguna         |
| **Tailwind CSS**    | Styling utility-first untuk desain responsif             |
| **Lucide React**    | Set ikon vektor yang konsisten dan ringan                |
| **React Hot Toast** | Notifikasi pop-up untuk pengalaman pengguna              |
| **Custom Hooks**    | Logika manajemen state tugas dipisahkan dalam `useTasks` |

## Struktur Komponen

Aplikasi ini menggunakan pendekatan komponen fungsional dengan beberapa bagian utama sebagai berikut

1. **Header** Menampilkan judul aplikasi dan identitas pembuat.
2. **Form Input** Area dinamis yang berubah fungsi antara menambah tugas baru atau memperbarui tugas yang ada.
3. **Filter & Search Bar** Kontrol untuk menyaring data yang ditampilkan berdasarkan kata kunci dan kategori.
4. **Task List** Menampilkan daftar tugas dalam bentuk kartu yang dilengkapi tombol aksi edit dan hapus.

## Cara Menjalankan Proyek

Pastikan kamu sudah menginstal Node.js di perangkat kamu kemudian ikuti langkah di bawah ini

1. Clone repositori ini ke komputer lokal.
2. Buka terminal dan masuk ke folder proyek.
3. Instal dependensi dengan perintah `npm install`.
4. Jalankan aplikasi dengan perintah `npm run dev`.
5. Buka browser dan akses alamat yang tertera pada terminal.

---

> Proyek ini dikembangkan oleh **Made Dipa**.
