'use strict';

import {
    readFileSync,
    writeFile
} from 'fs';
import {
    EOL
} from 'os';

/**
 * Function allowing to check if a shebang exists on a file, and to add one if there is none.
 * 
 * @param {string} file - file to parse.
 */
export const checkShebang = (file: string) => {
    let extAndShebang: (string[])[] = [
        ['.js', '#!/usr/bin/env node'],
        ['.sh', '#!/usr/bin/env bash'],
        ['.py', '#!/usr/bin/env python']
    ];
    let shebangReg: RegExp = /^ *#!\/usr\/bin\/env *\w+/;
    let dataFile: string | string[] = readFileSync(file, 'utf-8');

    if (shebangReg.test(dataFile)) {
        return;
    } else {
        // Loop for allowing to check the extension of the file to analyze 
        // and according to this one to insert the appropriate shebang.
        insertShebangLoop:
        for (let i: number = 0; i < extAndShebang.length; i++) {
            if (file.match(extAndShebang[i][0])) {
                dataFile = readFileSync(file, 'utf-8').split(EOL);
                dataFile.splice(0, 0, extAndShebang[i][1]);
                const shebangInsert: string = dataFile.join(EOL);
                writeFile(file, shebangInsert, err => {
                    if (err) throw err;
                })
                return;
            }
        }
    }
}