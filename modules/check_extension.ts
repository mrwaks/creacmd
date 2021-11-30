'use strict';

const validExtensions = [".js", ".py", ".sh"];

/**
 * Function allowing to check if the file chosen by the user uses a compatible extension (.js, .sh, .py).
 * 
 * @param {string} file - file to parse.
 */
export const checkExtension: (file: string) => void = (file: string) => validExtensions.map(ext => new RegExp(`\\${ext}$`).test(file)).find(bool => bool === true) ? true : (console.log(`Error: invalid file extension.\nSupported file extensions are: \x1b[1m".js" ".sh" ".py"\x1b[0m`), process.exit(1));