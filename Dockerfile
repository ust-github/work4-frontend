FROM nginx:alpine

COPY ./dist/work4/ /usr/share/nginx/html
