import { writeFile} from "node:fs/promises";
import { rename } from 'node:fs/promises';
import { unlink } from 'node:fs/promises';
import { displayInvalidInputMessage } from "./messageHelper.js";

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