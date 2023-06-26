import { writeFile} from "node:fs/promises";
import { rename } from 'node:fs/promises';
import { unlink } from 'node:fs/promises';
import { createReadStream} from "node:fs";
import { displayInvalidInputMessage, printWorkingDirectory } from "./messageHelper.js";


export const showContent = async (filename) => {
    try {
        const inp = createReadStream(filename, 'utf-8');
        inp.on('data', (chunk) => {
            console.log(chunk);
          });
        inp.on('end', () => {
            printWorkingDirectory();
          }); 
    } catch (error) {
        console.log(error);
        displayInvalidInputMessage();
    }
};

export const addFile = async (filename) => {

    const fileContent = '';
  
    try {
        await writeFile(filename, fileContent, {flag: 'wx'});
        console.log(`${filename} was successfully created`)
    } catch (error) {
        displayInvalidInputMessage();
    }
};



export const renameFile = async (filename, newFilename) => {

    try {
        await rename(filename, newFilename);
        console.log(`${filename} was successfully renamed to ${newFilename}`)
    } catch (error) {
        displayInvalidInputMessage(); 
    }
};

export const deleteFile = async (filename) => {

    try {
        await unlink(filename);
        console.log(`${filename} was successfully deleted`)
    } catch (error) {
        displayInvalidInputMessage(); 
    }
};