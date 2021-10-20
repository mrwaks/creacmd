'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsCMD = void 0;
const fs_1 = require("fs");
/**
 * Function to check if a command already exists in the /usr/local/bin directory.
 *
 * @param {string} cmd - command to parse.
 */
const existsCMD = (cmd) => {
    if (fs_1.existsSync(`/usr/local/bin/${cmd}`)) {
        console.log('Error: already existing command line: please choose another name.');
        process.exit(1);
    }
    else {
        return;
    }
};
exports.existsCMD = existsCMD;
