FROM node:24 AS build
WORKDIR /src
RUN npm i -g @angular/cli
COPY . .
RUN npm ci
RUN ng build

FROM nginx:alpine3.22
WORKDIR /usr/share/nginx/html
COPY --from=build /src/dist/portfolio-angular/browser .
EXPOSE 4200