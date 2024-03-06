var shortcut = process.env.shortcut;

const { exec } = require('child_process');

function openAndCloseApp() {
    // open shortcut
    exec(`start "" "${shortcut}"`, (error, stdout, stderr) => {
        if (error) {
			console.error(`Error: ${error.message}`);
			return;
        }

        if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
        }

        console.log(`Console App executed successfully`);
    });

    setTimeout(() => {
        console.log('Closing Console App process...');

        exec('taskkill /im brave.exe /f', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            console.log(`Console App process closed successfully`);
            
            openAndCloseApp();
        });
    }, 30 * 60000);
}

setTimeout(openAndCloseApp, 60000);
