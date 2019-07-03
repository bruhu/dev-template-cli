//here goes the function that prints out the folder names inside of ./templates

const fs = require("fs");

exports.folderList = () => {
  const templatesFolder = "./templates";
  fs.readdirSync(templatesFolder).forEach(folder => {
    console.log(folder);
  });
};

//source:
//https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j#2727191
