#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.creacmd = void 0;
const fs_1 = require("fs");
const os_1 = require("os");
const check_shebang_js_1 = require("./modules/check_shebang.js");
const check_cmd_exist_js_1 = require("./modules/check_cmd_exist.js");
const check_extension_js_1 = require("./modules/check_extension.js");
const creacmd = ([, , ...args] = process.argv) => {
    if (args.length === 2) {
        if (fs_1.existsSync(args[0])) {
            check_cmd_exist_js_1.existsCMD(args[1]);
            check_extension_js_1.checkExtension(args[0]);
            check_shebang_js_1.checkShebang(args[0]);
            fs_1.chmodSync(args[0], 0o755);
            fs_1.symlink(`${process.cwd()}/${args[0]}`, `/usr/local/bin/${args[1]}`, err => {
                if (err)
                    throw err;
            });
            console.log(`🚀 Congratulations !${os_1.EOL}The ${args[1]} command is now functional !`);
        }
        else {
            console.log(`Error: ${args[0]} file does not exit.`);
        }
    }
    else {
        console.log('Error: missing argument.');
    }
};
exports.creacmd = creacmd;
exports.creacmd();
