'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExtension = void 0;
/**
 * Function allowing to check if the file chosen by the user uses a compatible extension (.js, .sh, .py).
 *
 * @param {string} file - file to parse.
 */
function checkExtension(file) {
    if (file.endsWith('.js') || file.endsWith('.sh') || file.endsWith('.py')) {
        return;
    }
    else {
        console.log('Error: invalid file extension.');
        console.log(`Supported file extensions are: ${'.js'.bold} ${'.sh'.bold} ${'.py'.bold}`);
        process.exit(1);
    }
}
exports.checkExtension = checkExtension;
