import { readdir, stat } from 'fs/promises';
import { resolve} from 'path';
import { printWorkingDirectory, displayOperationFailedMessage} from "./messageHelper.js"


export const goUpper = async () => {
    const parentDirectory = resolve(process.cwd(), '..');
   
    if (parentDirectory !== process.cwd()) {
      process.chdir(parentDirectory);
      console.log(`You are currently in: ${parentDirectory}`);
    } else {
      console.log('You are in the root directory.');
    }
  };


export const goToDirectory = async (directory) => {
    try {
      const targetDir = resolve(process.cwd(), directory);
      process.chdir(targetDir);
      printWorkingDirectory();
    } catch (error) {
      displayOperationFailedMessage();
    }
  };

  export const showListInDirectory = async () => {
    try {
   
    const directoryPath = process.cwd(); 
    const contents = await readdir(directoryPath);

    contents.sort();

    const directories = [];
    const files = [];

    for (const content of contents) {
      const contentPath = `${directoryPath}/${content}`;
      const contentStats = await stat(contentPath);

      if (contentStats.isDirectory()) {
        directories.push(content);
      } else {
        files.push(content);
      }
    }

    console.log('№  Type       Name');
    directories.map((directory, index) => console.log(`${index}  DIRECTORY  ${directory}`))
    files.map((file,index) => console.log(`${index + directories.length}  FILE      ${file}`))
    
    } catch (error) {
      displayOperationFailedMessage();
    }
  };