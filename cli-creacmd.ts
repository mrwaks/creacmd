#!/usr/bin/env node

'use strict';

import {
    symlink,
    chmodSync,
    existsSync
} from 'fs';
import {
    EOL
} from 'os';
import {
    checkShebang
} from './modules/check_shebang.js';
import {
    existsCMD
} from './modules/check_cmd_exist.js';
import {
    checkExtension
} from './modules/check_extension.js';

export const creacmd = ([, , ...args]: string[] = process.argv) => {
    if (args.length === 2) {
        if (existsSync(args[0])) {
            existsCMD(args[1]);
            checkExtension(args[0]);
            checkShebang(args[0]);
            chmodSync(args[0], 0o755);
            symlink(`${process.cwd()}/${args[0]}`, `/usr/local/bin/${args[1]}`, err => {
                if (err) throw err;
            });
            console.log(`🚀 Congratulations !${EOL}The ${args[1]} command is now functional !`);
        } else {
            console.log(`Error: ${args[0]} file does not exit.`);
        }
    } else {
        console.log('Error: missing argument.');
    }

}

creacmd();