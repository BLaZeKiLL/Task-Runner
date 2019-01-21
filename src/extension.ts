import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('TASK RUNNER STARTED');

	let mainCommand = vscode.commands.registerCommand('extension.taskRunner', () => {
		vscode.window.showInformationMessage('Task Runner Activated');
	});

	context.subscriptions.push(mainCommand);

	let timeCommand = vscode.commands.registerCommand('extension.viewTime', () => {
		vscode.window.showInformationMessage(`Current Time: ${new Date()}`);
	});

	context.subscriptions.push(timeCommand);

}

// this method is called when your extension is deactivated
export function deactivate() {}
