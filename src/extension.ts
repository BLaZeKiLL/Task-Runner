import * as vscode from 'vscode';
import { loadScripts } from "./main/ScriptLoader";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('TASK RUNNER STARTED');

	let mainCommand = vscode.commands.registerCommand('extension.taskRunner', () => {
		vscode.window.showInformationMessage('Task Runner Activated');
	});

	context.subscriptions.push(mainCommand);

	let loadScriptsCommand = vscode.commands.registerCommand('extension.loadScripts', () => {
		loadScripts();
	});

	context.subscriptions.push(loadScriptsCommand);

}

// this method is called when your extension is deactivated
export function deactivate() {}
