# React Compiler + TanStack Router + Query + Shadcn

A modern web application built with React, TypeScript, and Vite, featuring a beautiful UI and robust functionality. This project leverages React Compiler for enhanced performance and optimized builds.

> **Note**: This project is a frontend modified version of the [Full Stack FastAPI Template](https://github.com/fastapi/full-stack-fastapi-template), with the main difference being the replacement of Chakra UI with shadcn/ui for the frontend components.

## 🚀 Features

- **Modern UI Components**: Built with shadcn/ui (replacing Chakra UI from the original template), Radix UI, and Tailwind CSS
- **Dark/Light Mode**: Theme toggle support with next-themes
- **Authentication**: Secure login system with form validation
- **User Management**: Comprehensive user and role management with data tables
- **Responsive Design**: Works seamlessly across all devices
- **Type Safety**: Built with TypeScript
- **Modern Routing**: Powered by TanStack Router
- **State Management**: React Query for efficient data fetching
- **Form Handling**: React Hook Form for form validation
- **Notifications**: Toast notifications with Sonner
- **Accessible Components**: Built with shadcn/ui for better accessibility
- **Performance Optimization**: React Compiler for enhanced build performance

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: 
  - Vite
  - React Compiler (Babel Plugin)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: 
  - shadcn/ui (Customizable components, replacing Chakra UI from the original template)
  - Radix UI (Primitives)
  - Lucide React (Icons)
- **Routing**: TanStack Router
- **Data Fetching**: React Query
- **Form Handling**: React Hook Form
- **Theme**: Next Themes
- **Notifications**: Sonner

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/makara4code/react-compiler-tanstack-router-queury-shadcn.git
   cd react-compiler-tanstack-router-queury-shadcn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
react-compiler-tanstack-router-queury-shadcn/
├── src/
│   ├── components/     # Reusable UI components (shadcn/ui, replacing Chakra UI)
│   ├── routes/         # Application routes
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── utils/          # Helper functions
├── public/             # Static assets
└── dist/               # Production build
```

## 🎨 UI Components

This project uses shadcn/ui components (replacing Chakra UI from the original template), which are built on top of Radix UI primitives and styled with Tailwind CSS. Key components include:

- **Form Components**: Input, Select, Checkbox, etc.
- **Data Display**: Table, Card, Badge, etc.
- **Navigation**: Dropdown Menu, Sidebar, etc.
- **Feedback**: Toast, Alert, etc.
- **Layout**: Container, Grid, etc.

## ⚡ Performance Optimization

This project uses React Compiler to optimize the build process and enhance performance:

- **Build Optimization**: React Compiler analyzes and optimizes React components
- **Code Splitting**: Automatic code splitting for better loading performance
- **Tree Shaking**: Dead code elimination for smaller bundle sizes
- **Development Experience**: Faster builds and hot module replacement

## 🚀 Available Scripts

- `npm run dev`: Start development server with React Compiler
- `npm run build`: Build for production with React Compiler optimization
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## 🔧 Configuration

- `vite.config.ts`: Vite configuration with React Compiler setup
- `tsconfig.json`: TypeScript configuration
- `eslint.config.js`: ESLint configuration
- `components.json`: shadcn/ui components configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Full Stack FastAPI Template](https://github.com/fastapi/full-stack-fastapi-template) for the original project structure
- [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components (replacing Chakra UI)
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [TanStack](https://tanstack.com/) for React Query and Router
- [Vite](https://vitejs.dev/) for the build tool
- [React Compiler](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024) for build optimization
