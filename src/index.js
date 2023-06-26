import fs from 'fs';
import path from 'path';
import readline from 'readline';

import { goUpper, goToDirectory, showListInDirectory } from './directoryfunctionality.js';
import { addFile, renameFile, deleteFile } from './fileOperations.js';
import { calculateHash } from './hasCalc.js';
import { compress, decompress } from './compression.js';
import { getOs } from './osInfo.js';
import { displayGoodbyeMessage, displayInvalidInputMessage, displayOperationFailedMessage, displayWelcomeMessage, printWorkingDirectory } from './messageHelper.js';


const args = process.argv.slice(2);
export const username = args.find(arg => arg.startsWith('--username=')).split('=')[1];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleExit = () => {
    displayGoodbyeMessage();
};

process.on('exit', handleExit);


const handleUserInput = async (input) => {
    const [command, ...args] = input.trim().split(' ');

    switch (command) {
        case '.exit':
            process.exit();
            break;

        case 'up':
            try {
                await goUpper();
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'cd':
            try {
                await goToDirectory(args[0]);
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'ls':
            try {
                await showListInDirectory();
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'add':
            try {
                await addFile(args[0]);
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'rn':
            try {
                await renameFile(args[0], args[1]);
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'rm':
            try {
                await deleteFile(args[0]);
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'os':
            try {
                await getOs(args[0]);
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'hash':
            try {
                await calculateHash(args[0]);
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'compress':
            try {
                if (!args[0] || !args[1]) {
                    console.error('Two arguments are required: inputFilePath and outputFilePath');
                  } else {
                    await compress(args[0], args[1]);
                  }
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        case 'decompress':
            try {
                if (!args[0] || !args[1]) {
                    console.error('Two arguments are required: inputFilePath and outputFilePath');
                  } else {
                    await decompress(args[0], args[1]);
                  }
            } catch (error) {
                displayOperationFailedMessage();
            }
            break;

        default:
            displayInvalidInputMessage();
            break;
    }
};


const promptUser = () => {
    rl.question('> ', async (input) => {
        await handleUserInput(input);
        promptUser();
    });
};


displayWelcomeMessage();
printWorkingDirectory();
promptUser();