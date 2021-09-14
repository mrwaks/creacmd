'use strict';

import { existsSync } from "fs";
import colors from 'colors';

export const existsCMD = (cmd) => {
    if (existsSync(`/usr/local/bin/${cmd}`)) {
        console.log('Error: already existing command line: please choose another name.'.red);
        process.exit(1);
    } else {
        return;
    }
}