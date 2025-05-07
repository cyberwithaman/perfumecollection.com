# Perfume E-commerce Website

A modern, elegant e-commerce website for selling luxury perfumes, built with Astro and React.

## 🚀 Features

- Responsive design that works on mobile, tablet, and desktop
- Product catalog with filtering and search capabilities
- Product detail pages with image galleries
- Shopping cart functionality
- Contact and about pages
- Modern UI with Tailwind CSS and shadcn/ui components

## 🧰 Tech Stack

- **Framework**: [Astro](https://astro.build/) with [React](https://react.dev/) integration
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## 📦 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # UI components
│   ├── data/         # Product data
│   ├── layouts/      # Page layouts
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components
│   └── styles/       # Global styles
└── package.json      # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amananilofficial/perfume.git
   cd perfume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 🏗️ Build

To build the site for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🧪 Code Checks

This project includes pre-build and post-build checks:

- **Pre-build**: Runs `prebuild-check.js` to ensure all prerequisites are met
- **Post-build**: Runs `dist-check.js` to analyze the build output
