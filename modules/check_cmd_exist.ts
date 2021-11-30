'use strict';

import { existsSync } from "fs";

/**
 * Function to check if a command already exists in the /usr/local/bin directory.
 * 
 * @param {string} cmd - command to parse.
 */
export const existsCMD: (cmd: string) => void = (cmd: string) => !existsSync(`/usr/local/bin/${cmd}`) ? true : (console.log('Error: already existing command line: please choose another name.'), process.exit(1));