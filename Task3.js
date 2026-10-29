
function countFilesInFolder(structure) {
    let count = 0; 

    for (let item of structure) {
        if (item.type === "file") {
            count++; 
        } else if (item.type === "folder") {
            // Count files inside the folder
            count += countFilesInFolder(item.children);
        }
    }

    return count; 
}
