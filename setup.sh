<>#!/bin/bash

# Navigate to the root directory
cd /home/project || exit

# Remove any existing react-frontend directories
rm -rf react-frontend

# Create react-frontend directory
mkdir react-frontend

# Navigate to the react-frontend directory
cd react-frontend || exit

# Initialize a new Vite + React project if package.json doesn't exist
if [ ! -f "package.json" ]; then
    npm create vite@latest . -- --template react
fi

# Install dependencies
npm install

# Install Tailwind CSS and its dependencies
npm install react-router-dom tailwindcss postcss autoprefixer --save

# Initialize Tailwind CSS
npx tailwindcss init -p

# Run the development server
npm run dev
