FROM node:15-alpine

WORKDIR /usr/src/app

#RUN npm config set registry https://registry.npmjs.org/ && \
#    npm config set strict-ssl false && \
#    npm init -y && \
#    npm install express --save && \
#    npm install mysql --save

COPY index.js /usr/src/app/
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

EXPOSE 3000

#CMD ["node","index.js"]

