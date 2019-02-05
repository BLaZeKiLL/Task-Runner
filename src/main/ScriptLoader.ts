import { window, workspace } from "vscode";
import * as fs from  'fs';
import * as util from 'util';

import { ScriptManager } from "./ScriptsManager";
import { ScriptItem } from "./Script";

const readFileAsync = util.promisify(fs.readFile);

export async function refreshScripts(): Promise<ScriptItem[]> {
  try {
    if (workspace.workspaceFolders !== undefined) {
      const data = await readFileAsync(`${workspace.workspaceFolders[0].uri.fsPath}/package.json`);
      console.log('PACKAGE READ');
      const items = ScriptManager.refreshScripts(Object.keys(JSON.parse(data.toString()).scripts));
      window.showInformationMessage('Scripts Loaded');
      return items;
    } else {
      throw new Error('no workspace');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
