# Panduan Instalasi

Proyek ini memiliki beberapa dependensi yang harus diinstal sebelum dapat dijalankan. Berikut adalah langkah-langkah instalasi:

## Clone Repository

Mulai dengan mengkloning repositori ini ke komputer Anda menggunakan perintah berikut:

```bash
git clone https://github.com/your-username/your-repository.git
```

## Instalasi Dependensi

Proyek ini membutuhkan beberapa paket berikut:
- **Express**: Framework web untuk Node.js
- **Body-parser**: Middleware untuk memproses HTTP request
- **Babel**: Untuk mengkompilasi JavaScript modern (`@babel/core`, `@babel/preset-env`, `@babel/node`)
- **Nodemon**: Untuk merestart server secara otomatis selama pengembangan
- **AVA**: Framework untuk pengujian

Setelah mengkloning repositori, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

```bash
npm install

npm install -g nodemon

npm install express

npm install --save-dev @babel/core

npm install --save-dev @babel/preset-env

npm install --save-dev @babel/node

npm install body-parser

npm install --save-dev nodemon

npm install ava
```

Penjelasan perintah di atas:
1. `npm install`: Menginstal semua paket yang tercantum dalam `package.json`.
2. `npm install -g nodemon`: Menginstal `nodemon` secara global untuk mempermudah pengembangan.
3. `npm install express`: Menginstal framework `express`.
4. `npm install --save-dev @babel/core`: Menginstal Babel sebagai alat kompilasi JavaScript.
5. `npm install --save-dev @babel/preset-env`: Menyediakan preset untuk mendukung berbagai fitur JavaScript modern.
6. `npm install --save-dev @babel/node`: Menjalankan aplikasi Node.js dengan Babel.
7. `npm install body-parser`: Menginstal middleware untuk mengurai data dari HTTP request.
8. `npm install ava`: Menambahkan framework pengujian `AVA`.

## Menjalankan Aplikasi

Setelah instalasi selesai, Anda dapat menjalankan aplikasi menggunakan langkah berikut:

1. Jalankan server dengan perintah:
   ```bash
   npm start
   ```
   Aplikasi akan tersedia di `http://localhost:3000`.

2. Jalankan pengujian dengan perintah:
   ```bash
   npm test
   
