import * as path from "path"
import * as fs from "fs"

/**
 * Function that given a directory fetches all files (flat directory assumption)
 * @param directory - an absolute directory path
 * @returns
 */
export function getAbsoluteFilePaths(directory: string): string[] {
    const filePaths = fs.readdirSync(directory, { withFileTypes: true }).filter(file => file.isFile()).map(file => path.join(directory, file.name))
    return filePaths
}

