# Use the official Node.js image as base
FROM node:latest

# Set working directory in the container
WORKDIR /app

# Create a volume to persist the directory structure
VOLUME /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port Next.js uses (usually 3000)
EXPOSE 3000

# Set environment variable to run in development mode
ENV NODE_ENV=development

# Command to run the Next.js app in dev mode
CMD ["npm", "run", "dev"]

# docker build -t nextjs-docker .

# docker run -p 3000:3000 -v $(pwd):/app nextjs-docker