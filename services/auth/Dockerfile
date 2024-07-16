
FROM node:22-alpine


WORKDIR /app


COPY package.json .


RUN npm install

# Copy the rest of the application 
COPY . .

#  port the app runs on
EXPOSE 3000

#  run the app
CMD ["npm", "run", "dev"]
