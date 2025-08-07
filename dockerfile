# Stage 1: Build the Angular app
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve using nginx
FROM nginx:alpine
COPY --from=build /app/dist/myclinic-frontend /usr/share/nginx/html
