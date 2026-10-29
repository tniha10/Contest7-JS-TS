/**Given a nested folder structure containing files and subfolders, count the total number of files present in the entire structure, including those within any subfolders.
The folder structure is represented as an array of objects. Each object can be either a file or a folder:
A file object has type: 'file'.
A folder object has type: 'folder' and a children property, which is an array of other file or folder objects.
Examples
const structure1 = [
  { "name": "document.txt", "type": "file" },
  { "name": "images", "type": "folder", "children": [
    { "name": "photo1.jpg", "type": "file" },
    { "name": "photo2.png", "type": "file" }
  ]},
  { "name": "report.pdf", "type": "file" }
];
countFilesInFolder(structure1);
// Expected output: 4

const structure2 = [
  { "name": "src", "type": "folder", "children": [
    { "name": "index.js", "type": "file" },
    { "name": "components", "type": "folder", "children": [
      { "name": "Button.js", "type": "file" },
      { "name": "Header.js", "type": "file" }
    ]}
  ]},
  { "name": "package.json", "type": "file" },
  { "name": "empty_folder", "type": "folder", "children": [] }
];
countFilesInFolder(structure2);
// Expected output: 5

Example 1
Input: structure = [{"name":"document.txt","type":"file"},{"children":[{"name":"photo1.jpg","type":"file"},{"name":"photo2.png","type":"file"}],"name":"images","type":"folder"},{"name":"report.pdf","type":"file"}]
Output: 4

Example 2
Input: structure = [{"children":[{"name":"index.js","type":"file"},{"children":[{"name":"Button.js","type":"file"},{"name":"Header.js","type":"file"}],"name":"components","type":"folder"}],"name":"src","type":"folder"},{"name":"package.json","type":"file"},{"children":[],"name":"empty_folder","type":"folder"}]
Output: 4 */

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
