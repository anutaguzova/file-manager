import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { displayInvalidInputMessage } from "./messageHelper.js";

export const calculateHash = async (filename) => {
  
    try {
        const contentOfFile = await readFile(`${process.cwd()}/${filename}`);
        const hash = createHash('sha256');
        hash.update(contentOfFile);
        const digest = hash.digest('hex');

       console.log('Hash - ' + digest);

    } catch (error) {
        displayInvalidInputMessage();
    }
};