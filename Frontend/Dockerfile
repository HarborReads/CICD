# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR Frontend/src/App

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]