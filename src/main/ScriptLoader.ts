import { window, workspace } from "vscode";
import * as fs from  'fs';

export function loadScripts() {
  if (workspace.workspaceFolders !== undefined) {
    fs.readFile(`${workspace.workspaceFolders[0].uri.fsPath}/package.json`, (err, data) => {
      if (err) {
        console.log(err); 
        throw err;
      }
      const npm = JSON.parse(data.toString());
      console.log(npm.scripts);
      window.showInformationMessage('Scripts Loaded');
    });
  }
}

