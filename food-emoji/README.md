# React + Vite
 ## Installation and setup
 --> I used Vite to create this React+Tailwind Project using the command:  npm create vite@latest and I enterd my project name which is food-emoji
 --> After that I installed tailwindcss in food-emoji folder using the command: npm install tailwindcss @tailwindcss/vite
--> After this I updated vite.config.js with the code
plugins: [
  react(),
  tailwind(),
]
-->And after this index.css m tailwind ko import kr lia with the line @import "tailwindcss";
-->And then I cleaned the starter files like index.css, app.jsx and main.jsx, kyuki usme by default code ata h react ka

 ## Planning the UI Structure
--> Created different components Main Heading Emoji Search, Navbar, Footer, Search Bar, Meme Grid and Meme Cards

--> The folder structure is as follows
src/
  components/
    Navbar.jsx
    SearchBar.jsx
    MemeCard.jsx
  pages/
    Home.jsx
  App.jsx
  index.css


--> Iske baad I implemented navbar, usko pura meme grid ki length tk stretch kia
and search bar or baki components banaye

-->Iske baad api ka data fetch kia and home.jsx m useeffect hook use kia
 and uske baad search functionality implement kri
-->Iske baad meme cards ka UI implement kia and then hr component ko Home m assemble kia

# 🎬 Meme Search App

Yo! 👋

Ek mazedaar app hai jo memes search karta hai 😂

**🔗 GitHub:** https://github.com/ArnavPandey1/meme_search

---

## 🔧 Installation & Setup

### Step 1️⃣ Project Create Karo
```bash
npm create vite@latest emoji_search
cd emoji_search
```

### Step 2️⃣ Tailwind Install Karo
```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 3️⃣ vite.config.js Update Karo
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
  ],
})
```

### Step 4️⃣ index.css Mein Tailwind Import Karo
```css
@import "tailwindcss";
```

### Step 5️⃣ Starter Files Clean Karo
- index.css ko clear karo
- app.jsx ko clean karo
- main.jsx ko setup karo

---

## 🎯 Kya Banaya?

✅ Meme Search with Real-time Filtering
✅ Beautiful UI with Gradients
✅ Responsive Design (Mobile to Desktop)
✅ Download Feature
✅ Loading & Error States
✅ Smooth Animations

---

## 📁 Folder Structure

```
emoji_search/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Header with gradient
│   │   ├── SearchBar.jsx    ← Search input
│   │   └── MemeCard.jsx     ← Meme card
│   ├── pages/
│   │   └── Home.jsx         ← Main page
│   ├── App.jsx              ← Root
│   ├── main.jsx             ← Entry point
│   └── index.css            ← Tailwind import
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🔄 Kaise Bana?

### 1️⃣ Navbar Banana
```javascript
// Gradient header with sticky position
// Emoji icons 🎬 😂
```

### 2️⃣ Search Bar Banana
```javascript
// Input field with rounded shape
// Gradient button
// Real-time result counter
```

### 3️⃣ Meme Grid Banana
```javascript
// Responsive columns (3-6)
// Beautiful cards
// Hover effects
```

### 4️⃣ API Fetch Karna
```javascript
// useEffect hook use kiya
// ImgFlip API se 100+ memes fetch kiye
// State mein store kiye
```

### 5️⃣ Search Functionality
```javascript
// Real-time filtering
// Name se match karta hai
// Instant results
```

### 6️⃣ Meme Cards Design
```javascript
// Image + Title + Box Count
// Hover animation
// Download button
```

### 7️⃣ Components Assemble
```javascript
// Navbar + SearchBar + Grid + MemeCards
// Home.jsx mein sab ko add kiya
```

---

## 🚀 Kaise Chalau?

**Dev Server:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

---

## 🎨 UI Components

**Navbar:**
- 🌈 Gradient (Blue → Purple → Pink)
- 📌 Sticky header
- 🎬😂 Emojis

**Search Bar:**
- 💬 Rounded shape
- 🌟 Gradient button
- 🔢 Counter

**Cards:**
- ⚪ White background
- 🎯 Hover zoom
- ⬇️ Download button

### Key Files:

**1. App.jsx**
```javascript
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
```

**2. Home.jsx (Main Logic)**
- API call with useEffect
- State management (memes, search, loading, error)
- Real-time filtering
- Grid rendering with MemeCards

**3. Navbar.jsx (Header)**
- Sticky gradient navbar
- Blue → Purple → Pink gradient
- Emoji icons (🎬 😂)

**4. MemeCard.jsx (Card Component)**
- Image display with hover zoom
- Title + box count
- Download button on hover

---