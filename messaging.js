exports.showHelp = () => {
  console.log(`Welcome to this CLI!
  ls templates: will show you all the content within the templates folder
  create <template-name> name="<your project-name>" dest="<destination>":
  creates a new project folder with the provided name in the destination directory using the given template
  --help: prints this help message - but you probably figured that out already ;)
  `);
};
