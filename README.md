## SETUP

- Project root dir
  -create a new project called dev-template-cli
  -npm init etc.
 
 - copy the content of the previous exercise folder to `<project_root>/templates/node-cli/`
 - Within `node-cli` folder
  - remove name property of the `package.json`
  - remove the logic in your main file

- CLI features:
  - `node ls templates`
    - prints out folder names from within `./templates`
   
   -`node create node-cli —name="my-new-cli" dest=~/Projects/cli/`
    - creates a new folder in `~/Projects/cli/` named `my-new-cli`
    - in new folder
      - copies content from the corresponding template folder
      - set `package.json` name property to value from `--name`
      
      
- Every CLI needs instructions aka `--help`

- **Extra:** don't copy node_modules
  - instead "spawn" a child process `npm install` and show output of this new process to your cli user
  - Extra Extra: when npm install is finished spawn the corresponding `dev` script from this template `npm install && npm run dev` is considered as cheating :P
