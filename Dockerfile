FROM node:alpine


WORKDIR /usr/app

#WORKDIR C:\Users\Diego\app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]