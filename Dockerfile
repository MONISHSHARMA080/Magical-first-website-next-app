# # Build the Go binary
# FROM golang:1.22 AS go-build
# WORKDIR /app
# COPY . /app/.
# RUN go build a.go

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
# EXPOSE 3333

# VOLUME /app

# CMD ["npm", "run", "dev"]

# FROM golang:1.22 AS go-build

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the Go source code
# COPY a.go .

# # Build the Go binary
# RUN go build -o a a.go
# CMD ./a 

# Stage 1: Build the Go binary

# Command to run the executable
# CMD ["./goserver"]

# Stage 2: Build the Next.js app
FROM node:latest AS node-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Stage 3: Final stage
FROM node:latest
WORKDIR /app

# Copy built Next.js files
COPY --from=node-build /app/. .
# COPY --from=node-build /app/public ./public

# Copy built Go binary
# COPY --from=golangBuild /app/goserver goserver

# Expose ports for Go and Next.js
EXPOSE 3000
# EXPOSE 3333

# Command to run both Go and Next.js
CMD npm run dev


# CMD /app/./a & npm run build

# docker build -t nextjs-docker . ; docker run -p 3000:3000 -p 3333:3333 -v $(pwd):/app nextjs-docker

# docker run -p 3000:3000 -v $(pwd):/app nextjs-docker
# docker run -p 3000:3000 -p 3333:3333 -v $(pwd):/app nextjs-docker