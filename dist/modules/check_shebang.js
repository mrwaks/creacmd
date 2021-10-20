'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkShebang = void 0;
const fs_1 = require("fs");
const os_1 = require("os");
/**
 * Function allowing to check if a shebang exists on a file, and to add one if there is none.
 *
 * @param {string} file - file to parse.
 */
const checkShebang = (file) => {
    let extAndShebang = [
        ['.js', '#!/usr/bin/env node'],
        ['.sh', '#!/usr/bin/env bash'],
        ['.py', '#!/usr/bin/env python']
    ];
    let shebangReg = /^ *#!\/usr\/bin\/env *\w+/;
    let dataFile = fs_1.readFileSync(file, 'utf-8');
    if (shebangReg.test(dataFile)) {
        return;
    }
    else {
        // Loop for allowing to check the extension of the file to analyze 
        // and according to this one to insert the appropriate shebang.
        insertShebangLoop: for (let i = 0; i < extAndShebang.length; i++) {
            if (file.match(extAndShebang[i][0])) {
                dataFile = fs_1.readFileSync(file, 'utf-8').split(os_1.EOL);
                dataFile.splice(0, 0, extAndShebang[i][1]);
                const shebangInsert = dataFile.join(os_1.EOL);
                fs_1.writeFile(file, shebangInsert, err => {
                    if (err)
                        throw err;
                });
                return;
            }
        }
    }
};
exports.checkShebang = checkShebang;
