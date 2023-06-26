import { username } from "./index.js";

export const printWorkingDirectory = () => {
    console.log(`You are currently in ${process.cwd()}`);
};

export const displayWelcomeMessage = () => {
    console.log(`Welcome to the File Manager, ${username}!`);
};

export const displayGoodbyeMessage = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

export const displayInvalidInputMessage = () => {
    console.log('Invalid input. Please enter another command.');
};

export const displayOperationFailedMessage = () => {
    console.log('Operation failed. Please try again.');
};