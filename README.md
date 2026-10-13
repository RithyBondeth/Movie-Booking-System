<div align="center">

# Movie Booking System

**A full-stack movie booking web app with server-side rendering.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

</div>

---

## Overview

Movie Booking System is a modern cinema-booking web app. Users browse movies by date, explore cinemas, food and offers, and sign up through a multi-step authentication flow. Pages are server-rendered with the Next.js App Router.

## Features

- **Home page** with a movie carousel and date picker.
- **Cinemas, Food, and Offers** pages.
- **Multi-step authentication:** username, phone number, and sign-up steps.
- **Rich header** with navigation dropdowns, search, notifications, and a responsive mobile menu.
- **Accessible UI components** built on Radix UI and shadcn/ui.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router, SSR), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui, Radix UI |
| Carousel | Swiper |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Movie-Booking-System.git
cd Movie-Booking-System
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
Movie-Booking-System/
└── src/
    ├── app/
    │   ├── (auth)/       # Multi-step authentication
    │   └── (main)/       # home, cinemas, food, offers
    ├── components/
    │   ├── header/       # Navbar, search, notifications, responsive menu
    │   ├── home/         # Movie and date components
    │   └── ui/           # shadcn/ui primitives
    ├── constants/
    ├── hooks/
    └── lib/
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
