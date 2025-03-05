FROM node:18-slim

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of your source code
COPY . .

# Expose Vite's development port
EXPOSE 5173

# Run development server with host flag to allow external connections
CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]