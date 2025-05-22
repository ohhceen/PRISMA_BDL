# PRISMA_BDL

Proyek ini adalah contoh implementasi Prisma ORM menggunakan database MySQL dan TypeScript. Di dalamnya terdapat dua model: `User` dan `Post` yang memiliki relasi satu-ke-banyak (One-to-Many).

## 📁 Struktur Folder

PRISMA-TUGAS/
├── prisma/
│ ├── schema.prisma # Skema utama untuk mendeskripsikan model dan koneksi DB
├── node_modules/
├── src/
│ ├── index.ts # Entry point aplikasi
├── .env # Berisi konfigurasi koneksi database
├── package.json
├── tsconfig.json # Konfigurasi TypeScript
└── README.md # Dokumentasi ini


---

## ⚙️ Setup

### 1. Clone repositori

git clone <url-repo-ini>
cd <nama-folder>

### 2. Instalasi dependensi
npm install

### 3. Konfigurasi .env
Buat file .env

### 4. Definisi Model (di prisma/schema.prisma)
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}

model Post {
  id      Int    @id @default(autoincrement())
  title   String
  content String
  user    User   @relation(fields: [userId], references: [id])
  userId  Int
}

### 5. Generate Prisma Client
npx prisma generate

Menggunakan migrasi
npx prisma migrate dev --name init

### 6. Jalankan file index.ts
npx ts-node src/index.ts

### 7. Perintah Penting
Perintah	Fungsi
npx prisma init	Inisialisasi folder Prisma
npx prisma generate	Generate Prisma Client
npx prisma migrate dev	Migrasi skema ke database
npx prisma db push	Push skema ke database (tanpa migrasi)
npx prisma studio	Buka GUI untuk lihat/edit data

👤 Dibuat Oleh
Nama: [Roxanne]
Proyek pembelajaran ORM modern menggunakan Prisma + MySQL.







