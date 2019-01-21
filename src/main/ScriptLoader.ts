import { window, workspace } from "vscode";
import * as fs from  'fs';

export function loadScripts() {
  console.log('Reading');
  fs.readFile(`${workspace.workspaceFolders}/package.json`, (err, data) => {
    if (err) {
      console.log(err); 
      throw err;
    }
    console.log('read');
    const npm = JSON.parse(data.toString());
    console.log(npm.scripts);
    window.showInformationMessage('Scripts Loaded');
  });
}

