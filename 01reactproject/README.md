## Vite + React

# Create a Project Vite + React Project

'''
npm create vite@latest

    Selecet a framework : React

    Select a Varient : Javascript

'''

# Move to the Project

'''
cd project name
'''

# install all dependencies

'''
npm install
'''

# Install Tailwind CSS

'''
npm install -D tailwindcss postcss autoprefixer

'''

# install peer dependencies

'''
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

'''
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

'''

# Start Your Run the Project

'''
npm run dev
'''
