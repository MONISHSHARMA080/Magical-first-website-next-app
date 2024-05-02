# # Build the Go binary
# FROM golang:1.22 AS go-build
# WORKDIR /app
# COPY . /app/.
# RUN go build go.mod 

# # Build the Next.js app
# FROM node:18 AS node-build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# RUN npm ci
# COPY . .
# RUN npm run dev

# # Final stage
# FROM node:18
# WORKDIR /app
# COPY --from=go-build /app/main ./
# COPY --from=node-build /app/.next ./.next
# COPY --from=node-build /app/node_modules ./node_modules
# COPY --from=node-build /app/package.json ./package.json

# EXPOSE 3000

# VOLUME /app

# CMD ["npm", "run", "dev"]


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