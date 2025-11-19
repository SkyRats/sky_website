# Dockerfile
FROM node:20-alpine
WORKDIR /app
# We copy package.json first to leverage Docker caching
COPY package.json .
# We run install during the build phase now
RUN npm install
# Copy the rest of your code
COPY . .
# Default command
CMD ["npm", "run", "dev"]