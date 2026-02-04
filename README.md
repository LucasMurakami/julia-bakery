# Bakery Website

A modern, responsive website for showcasing a bakery's delicious cakes, flavors, and story. Built with Astro, React, and Tailwind CSS for fast performance and beautiful design.

## ✨ Features

- **Hero Section**: Eye-catching introduction with smooth animations
- **Flavor Showcase**: Interactive display of available cake flavors
- **Product Gallery**: Beautiful gallery of bakery items
- **Testimonials**: Customer reviews and feedback
- **Story Section**: About the bakery's history and passion
- **Call-to-Action**: Encourage visitors to contact or order
- **Responsive Design**: Optimized for all devices
- **Smooth Scrolling**: Enhanced user experience with Lenis library

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator for fast websites
- **UI Library**: [React](https://reactjs.org/) - For interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- **Icons**: Custom SVG assets
- **Animations**: Smooth scrolling with Lenis

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bakery-website.git
   cd bakery-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser to see the website.

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BakeryGallery.astro
│   │   ├── CTA.astro
│   │   ├── FlavorMarquee.astro
│   │   ├── Flavors.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Home.astro
│   │   ├── NavBar.astro
│   │   ├── ProductShowcase.astro
│   │   ├── Story.astro
│   │   ├── Testimonials.astro
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── Nav.tsx
│   │       └── navigation-menu.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── cakes.astro
│   │   └── cakes/
│   │       └── [id].astro
│   ├── scripts/
│   │   └── smoothScroll.ts
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `npm run dev`    | Starts local dev server at `localhost:4321`      |
| `npm run build`  | Build your production site to `./dist/`          |
| `npm run preview`| Preview your build locally, before deploying     |
| `npm run astro`  | Run Astro CLI commands                           |

## 🚀 Deployment

This Astro site can be deployed to any static hosting service. Popular options include:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Surge](https://surge.sh)

For deployment guides, check out the [Astro deployment docs](https://docs.astro.build/en/guides/deploy/).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or inquiries about the bakery, please visit our website or contact us directly.

---

Built with ❤️ using Astro
