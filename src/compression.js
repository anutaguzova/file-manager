import { createReadStream, createWriteStream } from "node:fs";
import zlib from 'zlib';


export const compress = async (filename, filenameCompress) => {
    try {
         
    const inp = createReadStream(filename);
    const out = createWriteStream(filenameCompress);

    const brotli = zlib.createBrotliCompress();

    await new Promise((res, rej) => {
        inp
          .pipe(brotli)
          .pipe(out)
          .on('finish', res)
          .on('error', rej);
      });
    
        console.log('Done compressing');
      } catch (error) {
        console.error('Failed to compress file:', error);
      }

};

 export const decompress = async (filename, filenameDecompress) => {
    try {
         
        const inp = createReadStream(filename);
        const out = createWriteStream(filenameDecompress);
    
        const brotli = zlib.createBrotliDecompress();
    
        await new Promise((res, rej) => {
            inp
              .pipe(brotli)
              .pipe(out)
              .on('finish', res)
              .on('error', rej);
          });
        
            console.log('Done decompressing');
          } catch (error) {
            console.error('Failed to compress file:', error);
          }
};