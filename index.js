//these are the module imports, this comment makes us VERY happy :D
const path = require("path");
const { showHelp } = require("./messaging");
const { folderList } = require("./printFolderNames");

const args = process.argv.slice(2, process.argv.length);
if (args.includes("--help")) {
  showHelp();
}

if (args.includes("ls") && args.includes("templates")) {
  folderList();
}

//console.log(__dirname);

// const printFolderNames = path => {
//   console.log("whatever");
// };

// const createNewTemplate = (type, name, dest) => {
//   console.log(type, name, dest);
// };

// if arguments contains ls and templates
// read all folders in templates and print them out
// if (args[0] == "ls" && args[1] == "templates") {
//   const PATH = path.join(__dirname + "/templates");
//   console.log(PATH);
//   printFolderNames(PATH);
// } else if (args[0] == "create") {
//   //type of template
//   const type = args[1];
//   const name = args[2];
//   const dest = args[3];
//   createNewTemplate(type, name, dest);
// } else {
//   console.log("nope for now ;D");
// }

// create node-cli —name="my-new-cli" dest=~/Projects/cli/
// if create and node-cli and -name and dest
// create new folder at dest with name -name
// copy from template folder node-cli to dest/-name
// in new created location change property name to -name in package.json
