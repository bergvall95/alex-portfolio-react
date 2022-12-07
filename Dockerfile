FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build the React app
RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]