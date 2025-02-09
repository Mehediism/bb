const { exec } = require('child_process');

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: './react-frontend' }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command "${command}": ${error}`);
        reject(error);
        return;
      }
      console.log(`Command "${command}" output:\\n${stdout}`);
      if (stderr) {
        console.warn(`Command "${command}" stderr:\\n${stderr}`);
      }
      resolve();
    });
  });
}

async function setup() {
  try {
    await executeCommand('npm install');
    await executeCommand('npm install react-router-dom tailwindcss postcss autoprefixer --save');
    await executeCommand('npx tailwindcss init -p');
    console.log('Tailwind CSS initialized.');
    await executeCommand('npm run dev');
  } catch (error) {
    console.error('Setup failed:', error);
  }
}

setup();
