FROM node:14
WORKDIR /usr/src/shareddit-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 443
EXPOSE 80
EXPOSE 8080
RUN npm run build
CMD ["npm", "start"]
