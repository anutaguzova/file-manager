import os from 'os';

export const getOs = async (parameter) => {
  try {

    switch (parameter) {
        case '--EOL':
            console.log(`The default system End-Of-Line is: ${JSON.stringify(os.EOL)}`);
        break;

        case '--cpus':
            console.log(` host machine CPUs info: ${JSON.stringify(os.cpus())}`);
        break;

        case '--homedir':
            console.log(`The home directory is: ${os.homedir()}`);
        break;

        case '--username':
            console.log(`The username is: ${os.userInfo().username}`);
        break;

        case '--architecture':
            console.log(`The CPU architecture is: ${JSON.stringify(os.arch())}`);
        break;

    default:
        displayInvalidInputMessage();
        break;
    }
  } catch (error) {
    console.error('Error occurred while retrieving os info:', error);
  }
}