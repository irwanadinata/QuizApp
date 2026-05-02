# Quizzy - Modern Quiz Application 🎯

Quizzy is a highly interactive, beautifully designed web-based quiz application built with React and Tailwind CSS. It features a sleek glassmorphism aesthetic, smooth animations, and a seamless user experience.

## ✨ Live Demo
https://quiz-app-delta-tan.vercel.app/

<img width="1916" height="1024" alt="image" src="https://github.com/user-attachments/assets/05571520-ba49-47b1-91e3-2015e088d1ed" />


## ✨ Features

- **Modern UI/UX**: Stunning glassmorphism design with a vibrant amber/yellow color scheme.
- **Dark & Light Mode**: Fully responsive theme toggling with smooth.
- **Engaging Animations**: Powered by Framer Motion for buttery-smooth page transitions, hover effects, and interactive elements.
- **Dynamic Quiz Engine**: Fetches questions via API, randomizes answer choices, and calculates scores on the fly.
- **Live Progress & Timer**: Includes a dynamic progress bar and a visual countdown timer for each quiz session.
- **Interactive Results**: Displays an animated SVG donut chart to showcase the final score and detailed statistics.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS (with custom keyframe animations and dark mode support)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Fetching**: Axios (connects to Open Trivia Database API)
- **Utilities**: `react-countdown` for the timer and `react-spinners` for elegant loading states.

## 📂 Project Structure

- `src/components/` - Reusable UI components (`Question`, `Result`, `ThemeToggle`, `UsernameDisplay`, etc.)
- `src/pages/` - Main application views (`Login`, `Quiz`)
- `src/context/` - Global state management (e.g., `ThemeContext` for Dark/Light mode)
- `src/utils/` - Helper functions and API configurations
- `src/styles/` - Global CSS and custom Tailwind classes
- `public/` - Static assets
