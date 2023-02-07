FROM node:latest

WORKDIR /usr/local/apache2/htdocs
COPY package.json /usr/local/apache2/htdocs
RUN npm install
COPY . /usr/local/apache2/htdocs

CMD npm run dev