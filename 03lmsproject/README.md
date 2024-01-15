# React + Vite + Tailwind CSS 
# Installation of Project
# Create a Project 
'''
    npm create vite@latest
'''
# Project Name 
'''
    03lmsproject
'''
# Select Framework 
'''
    React
'''
# Select a Varient 
'''
    JavaScript
'''
# Move to the Project 
'''
    cd 03lmsproject
'''
# Install Dependencies 
'''
    npm install 
'''
## Install Tailwind CSS in React-Project
'''
    Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p
'''
# Configure your template paths
'''
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
'''
# Add the Tailwind directives to your CSS
    Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
'''
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
'''
# Start Your Project 
'''
    npm run dev
'''
