'use strict';

import {
    readFileSync,
    writeFile
} from 'fs';
import {
    EOL
} from 'os';

export const checkShebang = (file) => {
    let extAndShebang = [
        ['.js', '#!/usr/bin/env node'],
        ['.sh', '#!/usr/bin/env bash'],
        ['.py', '#!/usr/bin/env python']
    ];
    let shebangReg = /^ *#!\/usr\/bin\/env *\w+/;
    let dataFile = readFileSync(file, 'utf-8');

    if (dataFile.match(shebangReg)) {
        return;
    } else {
        for (let i = 0; i < extAndShebang.length; i++) {
            if (file.match(extAndShebang[i][0])) {
                let dataFile = readFileSync(file, 'utf-8').split(EOL);
                dataFile.splice(0, 0, extAndShebang[i][1]);
                let shebangInsert = dataFile.join(EOL);
                writeFile(file, shebangInsert, err => {
                    if (err) throw err;
                })
                return;
            }
        }
    }
}