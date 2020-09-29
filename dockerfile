FROM node:12.4

WORKDIR /docker/crwn

COPY package*.json ./
RUN npm install

# Copy source
COPY . .

EXPOSE 5000

CMD npm run dockerstart