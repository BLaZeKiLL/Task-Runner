import * as vscode from 'vscode';
import { refreshScripts } from "./main/ScriptLoader";
import { ScriptProvider } from './main/ScriptProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('TASK RUNNER STARTED');
	const scriptProvider = new ScriptProvider();

	let loadScriptsCommand = vscode.commands.registerCommand('task-runner.refreshScripts', async () => {
		try {
			console.log('LOADING SCRIPTS');
			const items = await refreshScripts();
			if (items) {
				scriptProvider.refresh(items);
			}
		} catch (error) {
			console.log('Refresh Error');
			console.log(error);
		}
	});

	vscode.window.registerTreeDataProvider('tasks', scriptProvider);

	context.subscriptions.push(loadScriptsCommand);

}

// this method is called when your extension is deactivated
export function deactivate() {}
