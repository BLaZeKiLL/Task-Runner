import * as vscode from 'vscode';
import { loadScripts } from "./main/ScriptLoader";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('TASK RUNNER STARTED');

	let loadScriptsCommand = vscode.commands.registerCommand('task-runner.refreshScripts', () => {
		loadScripts();
	});

	context.subscriptions.push(loadScriptsCommand);

}

// this method is called when your extension is deactivated
export function deactivate() {}
