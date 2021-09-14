#!/usr/bin/env node

'use strict';

import {
    existsSync,
    rm
} from 'fs';
import { EOL } from 'os';

import colors from 'colors';

export const delcmd = ([, , ...args] = process.argv) => {
    if (args.length >= 1) {
        args.forEach(cmd => {
            if (existsSync(`/usr/local/bin/${cmd}`)) {
                let str = '';
                str += cmd;
                rm(`/usr/local/bin/${cmd}`, err => {
                    if (err) throw err;
                });
                console.log(`🚀 Congratulations !${EOL}The ${str.bold} command is now deleted !`.green);
            } else {
                console.log(`Error: command line does not exist.`.red);
            }
        })
    } else {
        console.log('Error: missing argument.'.red);
    }
}

delcmd();