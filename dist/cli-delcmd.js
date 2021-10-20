#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.delcmd = void 0;
const fs_1 = require("fs");
const os_1 = require("os");
const delcmd = ([, , ...args] = process.argv) => {
    if (args.length >= 1) {
        deleteCommandLoop: args.forEach(cmd => {
            if (fs_1.existsSync(`/usr/local/bin/${cmd}`)) {
                let str = '';
                str += cmd;
                fs_1.unlinkSync(`/usr/local/bin/${cmd}`);
                console.log(`🚀 Congratulations !${os_1.EOL}The ${str} command is now deleted !`);
            }
            else {
                console.log(`Error: command line does not exist.`);
            }
        });
    }
    else {
        console.log('Error: missing argument.');
    }
};
exports.delcmd = delcmd;
exports.delcmd();
