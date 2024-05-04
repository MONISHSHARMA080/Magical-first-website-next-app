# Stage 2: Build the Next.js app
FROM node:21-alpine3.18 AS node-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Stage 3: Final stage
FROM node:latest
WORKDIR /app

# Copy built Next.js files
COPY --from=node-build /app/. .
# Expose ports for Go and Next.js
EXPOSE 3000
# EXPOSE 3333

# Command to run both Go and Next.js
CMD npm run dev


# docker build -t nextjs-docker . ; docker run -p 3000:3000 -p 3333:3333 -v $(pwd):/app nextjs-docker

# docker run -p 3000:3000 -v $(pwd):/app nextjs-docker
# docker run -p 3000:3000 -p 3333:3333 -v $(pwd):/app nextjs-docker