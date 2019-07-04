//these are the module imports, this comment makes us VERY happy :D
const path = require("path");
const { showHelp } = require("./messaging");
const { listFolderNames } = require("./listFolderNames");

const args = process.argv.slice(2, process.argv.length);

//shows help text if arguments include --help
if (args.includes("--help")) {
  showHelp();
}

// if arguments contains ls and templates
// read all folders in templates and print them out
if (args.includes("ls") && args.includes("templates")) {
  listFolderNames();
}
console.log(listFolderNames());

// will create a new template if arguments include create, followed by type, name and dest
if (args[0] == "create") {
  //type of template
  const type = args[1];
  const name = args[2];
  const dest = args[3];
  createNewTemplate(type, name, dest);
} else {
  console.log("nope for now ;D");
}

// create node-cli —name="my-new-cli" dest=~/Projects/cli/
// if create and node-cli and -name and dest
// create new folder at dest with name -name
// copy from template folder node-cli to dest/-name
// in new created location change property name to -name in package.json
