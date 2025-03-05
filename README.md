# Countries Project

A full-stack application for exploring countries data with a modern React frontend and NestJS backend.

<img width="1728" alt="image" src="https://github.com/user-attachments/assets/9a97d343-a88b-41e5-97c2-dde19a0e2700" />


## Project Structure

This project consists of two main components:

-   **countries-fe**: A React frontend built with Vite, TypeScript, and TailwindCSS
-   **countries-api**: A NestJS backend API

## Technologies Used

### Frontend (countries-fe)

-   React 19
-   TypeScript
-   Vite
-   TailwindCSS
-   Jest for testing

### Backend (countries-api)

-   NestJS
-   TypeScript

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm
-   Docker and Docker Compose (optional, for containerized setup)

### Running with Docker Compose

The easiest way to run the entire application is using Docker Compose:

```bash
# Start both frontend and backend services
docker-compose up
```

This will start:

-   Frontend at http://localhost:5173
-   Backend at http://localhost:3000

### Running Locally

#### Frontend

```bash
cd countries-fe
pnpm install
pnpm run dev
```

#### Backend

```bash
cd countries-api
pnpm install
pnpm run start:dev
```

## Development

### Building for Production

#### Frontend

```bash
cd countries-fe
pnpm build
```

#### Backend

```bash
cd countries-api
pnpm build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
