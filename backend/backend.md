# 🚀 Backend Express To-Do List

Selamat datang di bagian **backend** dari proyek To-Do List Fullstack (Vue + Express + MySQL)! 📝✨

---

## ✨ Fitur Unggulan

- 🔄 **REST API** untuk CRUD To-Do (Create, Read, Update, Delete)
- 💾 **Penyimpanan data** di MySQL (menggunakan UUID sebagai primary key)
- ✅ **Validasi data** & status tugas (pending/done)
- 🗂️ **Struktur kode** rapi dengan konsep MVC

---

## 📁 Struktur Folder

```
backend/
├── config/
│   └── db.js
├── controllers/
│   └── todoController.js
├── models/
│   └── todoModels.js
├── routes/
│   └── todoRoutes.js
├── .env
├── app.js
├── package.json
```

---

## ▶️ Cara Menjalankan

1. 📂 Masuk ke folder `backend`:
    ```bash
    cd backend
    ```
2. 📦 Install dependencies:
    ```bash
    npm install
    ```
3. 📝 Buat file `.env` dengan konfigurasi database MySQL kamu:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=todo_db
    DB_PORT=3306
    ```
4. 🚀 Jalankan server:
    ```bash
    npm start
    ```
    atau
    ```bash
    npm run dev
    ```
5. 🌐 API berjalan di: [http://localhost:3000/api/todos](http://localhost:3000/api/todos)

---

## 🛠️ Dependency yang Dibutuhkan

```bash
npm install express mysql2 dotenv cors
# (opsional untuk development)
npm install --save-dev nodemon
```

---

## 📝 Catatan Penting

- ⚠️ Pastikan database MySQL sudah berjalan & tabel `todos` sudah dibuat.
- 📚 Proyek ini untuk pembelajaran & eksperimen.

---

**Pembuat:**  
Dimas & GitHub Copilot 🤖✨

