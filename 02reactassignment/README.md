## Project Creation Step 

# Create a Project 
''
npm create vite@latest
''
# Create Project Name 
''
reactassienment
''
# Choose Fremework 
''
React
''
# Choose type of framework
''
javascript
''
# Move to the project 
''
cd reactassignment
''
# Install Dependencies
''
npm install
''
## Install Tailwind CSS and peer dependencies 
''
npm install -D tailwindcss postcss autoprefixer
''
# Generate tailwindconfig.js file 
''
npx tailwindcss init -p
''
# Configure your path all file 
''
content : [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",

],

''
# Add the tailwind directives to your css
''
file name : index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
''

# Clean the Project 
''
Clean the unnessery file 

## Run the Project 

'''

npm run dev

'''






