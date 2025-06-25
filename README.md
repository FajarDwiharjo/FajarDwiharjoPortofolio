# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# 🚀 Setup ReactJS + Vite + TailwindCSS di Visual Studio Code

## ✨ Persiapan Awal

Pastikan sudah terpasang:

- [Node.js](https://nodejs.org/) (v18 ke atas)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

---

## ⚙️ Membuat Project ReactJS dengan Vite

1. Buka terminal, lalu jalankan:

   ```bash
   npm create vite@latest nama-proyek-anda -- --template react
   ```

2. Masuk ke folder project:

   ```bash
   cd nama-proyek-anda
   ```

3. Install semua dependency:

   ```bash
   npm install
   ```

---

## 🎨 Install TailwindCSS

1. Install TailwindCSS, PostCSS, dan Autoprefixer:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Inisialisasi konfigurasi Tailwind:

   ```bash
   npx tailwindcss init -p
   ```

3. Edit `tailwind.config.js` bagian `content` menjadi:

   ```javascript
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
   ```

4. Buat file `src/index.css` dan isi dengan:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. Import file CSS ke dalam `src/main.jsx`:

   ```javascript
   import './index.css';
   ```

---

## 🔌 Ekstensi VSCode yang Disarankan

Install melalui marketplace VSCode:

- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Simple React Snippets (opsional)

---

## 🔥 Menjalankan Proyek

Jalankan server development:

```bash
npm run dev
```

Buka browser di URL yang muncul, biasanya:

```
http://localhost:5173/
```

---

## 📝 Catatan

- Jalankan semua perintah dari folder project.
- Pastikan `tailwind.config.js` sudah benar.
- Pastikan file CSS sudah di-import di `main.jsx`.
- Jika autocomplete Tailwind tidak aktif, cek apakah ekstensi IntelliSense sudah terpasang dan aktif.
