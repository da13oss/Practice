# LightsaberHub E-commerce

A modern e-commerce platform for custom lightsabers built with React, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product browsing and shopping cart
- ⚔️ Custom lightsaber builder
- 👤 User authentication
- 🛒 Checkout process
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔒 Form validation with Zod
- 💾 State management with Zustand

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd lightsaber-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── account/       # Account-related components
│   ├── cart/          # Shopping cart components
│   ├── checkout/      # Checkout process components
│   ├── layout/        # Layout components (navbar, etc.)
│   ├── product/       # Product-related components
│   └── ui/            # Basic UI components
├── pages/             # Page components
│   ├── account/       # Account pages
│   ├── auth/          # Authentication pages
│   ├── cart/          # Cart pages
│   ├── checkout/      # Checkout pages
│   └── customize/     # Lightsaber customization
├── store/             # Zustand store configurations
├── types/             # TypeScript type definitions
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## Development Guidelines

1. **Component Structure**
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error handling
   - Add JSDoc comments for complex logic

2. **State Management**
   - Use Zustand for global state
   - Keep component state local when possible
   - Implement proper loading and error states

3. **Styling**
   - Use Tailwind CSS utility classes
   - Follow responsive design principles
   - Maintain consistent spacing and colors

4. **Form Handling**
   - Use React Hook Form for form state
   - Implement Zod schemas for validation
   - Show clear error messages

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details