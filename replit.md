# Overview

This is a meme coin website for "FTF Coin" (Fuck The Farmers), a Solana-based cryptocurrency that satirically opposes "farming" metaphors in crypto. The application is built as a full-stack web platform with a React frontend and Express backend, featuring a modern single-page application with newsletter subscription functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend uses React 18 with TypeScript, built on top of Vite for fast development and building. The UI is constructed using shadcn/ui components built on Radix UI primitives, providing accessible and customizable components. Styling is handled through Tailwind CSS with custom CSS variables for brand theming (purple, gold, teal color scheme). The application uses wouter for lightweight client-side routing and TanStack React Query for server state management.

## Component Structure
The application follows a component-based architecture with:
- Page components (Home, NotFound) that compose multiple sections
- Feature components (Hero, About, Tokenomics, Newsletter, etc.) for different website sections
- Reusable UI components from shadcn/ui library
- Custom hooks for mobile detection and toast notifications

## Backend Architecture
The backend is built with Express.js using TypeScript and ESM modules. It follows a clean architecture pattern with:
- Route handlers in `/server/routes.ts` for API endpoints
- Storage abstraction layer with in-memory storage implementation
- Middleware for request logging and error handling
- Development-only Vite integration for hot reloading

## Data Storage
The application uses Drizzle ORM configured for PostgreSQL with schema definitions shared between frontend and backend. Currently implements an in-memory storage adapter for development, with database schemas defined for users and newsletter subscribers. The schema includes proper UUID generation and timestamp handling.

## API Design
RESTful API design with:
- `POST /api/subscribe` - Newsletter subscription endpoint with email validation
- `GET /api/stats` - Subscriber statistics (optional)
- Zod schema validation for request/response data
- Proper error handling with HTTP status codes
- CORS and security middleware ready for production

## Development Workflow
The project uses a monorepo structure with shared TypeScript types and schemas. Development server runs both frontend (Vite) and backend (tsx) with hot reloading. Build process creates optimized frontend bundle and ESM backend bundle for production deployment.

# External Dependencies

## UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives for accessible, customizable components
- **Radix UI**: Unstyled, accessible UI primitives for React
- **Tailwind CSS**: Utility-first CSS framework with custom design system variables
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant API for component styling

## State Management and Data Fetching
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: TypeScript-first schema validation for forms and API responses

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect support
- **Neon Database**: Serverless PostgreSQL database (via @neondatabase/serverless)
- **Drizzle Kit**: Database migration and schema management tools

## Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking with strict configuration
- **ESBuild**: Fast JavaScript bundler for production backend builds
- **tsx**: TypeScript execution environment for development

## Routing and Navigation
- **wouter**: Lightweight client-side routing library for React
- **React Router**: Not used - project opts for lighter wouter alternative

## Utility Libraries
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **date-fns**: Date manipulation and formatting library
- **nanoid**: URL-safe unique string ID generator

The architecture prioritizes type safety, developer experience, and performance while maintaining a clean separation of concerns between frontend presentation, backend API logic, and data persistence layers.