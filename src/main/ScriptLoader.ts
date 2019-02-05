import { window, workspace } from "vscode";
import * as fs from  'fs';
import { ScriptManager } from "./ScriptsManager";

export function loadScripts() {
  if (workspace.workspaceFolders !== undefined) {
    fs.readFile(`${workspace.workspaceFolders[0].uri.fsPath}/package.json`, (err, data) => {
      if (err) {
        console.log(err); 
        throw err;
      }
      console.log('PACKAGE READ');
      ScriptManager.addScripts(Object.keys(JSON.parse(data.toString()).scripts));
      window.showInformationMessage('Scripts Loaded');
    });
  }
}
