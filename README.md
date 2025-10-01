# Mikiyas Alemayehu - Portfolio

A stunning, animated portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

✨ **Amazing Animations**
- Smooth scroll animations
- Parallax effects
- Interactive particle background
- Framer Motion transitions
- Hover effects and micro-interactions

🎨 **Modern Design**
- Dark mode theme
- Glassmorphism effects
- Gradient accents
- Responsive design
- Custom scrollbar

💬 **Integrated Chat Widget**
- Floating chat button
- Jotform integration
- Smooth animations

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Jotform** - Chat integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── ChatWidget.jsx
│   │   └── ParticlesBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Name & Bio**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Contact Info**: `src/components/Contact.jsx`

### Change Colors

Modify the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Jotform Chat

The Jotform chat script is already included in `index.html`. The chat widget will automatically integrate when you open it.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Mikiyas Alemayehu**

---

Built with ❤️ using React & Tailwind CSS
