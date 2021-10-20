#!/usr/bin/env node

'use strict';

import {
    existsSync,
    rm
} from 'fs';
import { EOL } from 'os';

export const delcmd = ([, , ...args]: string[] = process.argv) => {
    if (args.length >= 1) {
        deleteCommandLoop:
        args.forEach(cmd => {
            if (existsSync(`/usr/local/bin/${cmd}`)) {
                let str: string = '';
                str += cmd;
                rm(`/usr/local/bin/${cmd}`, err => {
                    if (err) throw err;
                });
                console.log(`🚀 Congratulations !${EOL}The ${str} command is now deleted !`);
            } else {
                console.log(`Error: command line does not exist.`);
            }
        })
    } else {
        console.log('Error: missing argument.');
    }
}

delcmd();