'use strict';

import colors from 'colors';

/**
 * Function allowing to check if the file chosen by the user uses a compatible extension (.js, .sh, .py).
 * 
 * @param {string} file - file to parse.
 */
export function checkExtension(file) {
    if (file.endsWith('.js') || file.endsWith('.sh') || file.endsWith('.py')) {
        return;
    } else {
        console.log('Error: invalid file extension.'.red);
        console.log(`Supported file extensions are: ${'.js'.bold} ${'.sh'.bold} ${'.py'.bold}`.red);
        process.exit(1);
    }
}