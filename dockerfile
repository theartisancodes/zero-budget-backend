# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application files
COPY . .

# Generate the Prisma client (if you're using Prisma ORM)
RUN npx prisma generate

RUN npx prisma migrate
# Expose the port the app will run on
EXPOSE 4000

# Define the command to start the application
CMD ["yarn", "start"]
