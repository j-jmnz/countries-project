# Use a more compatible Node image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the app in development mode
CMD ["pnpm", "run", "start:dev"]