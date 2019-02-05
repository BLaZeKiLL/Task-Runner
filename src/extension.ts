import * as vscode from 'vscode';
import { ScriptProvider } from './main/ScriptProvider';
import { ScriptManager } from './main/ScriptsManager';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('TASK RUNNER STARTED');
	const scriptProvider = new ScriptProvider();

	let loadScriptsCommand = vscode.commands.registerCommand('task-runner.refreshScripts', () => scriptProvider.refresh());

	vscode.window.registerTreeDataProvider('tasks', scriptProvider);

	vscode.commands.registerCommand('task-runner.run', (task) => {
		console.log(`RUN TASK ${task.label}`);
		const script = ScriptManager.getTask(task.label);
		if (script) {
			console.log('script found')
			vscode.tasks.executeTask(script).then(
				(result) => { console.log(JSON.stringify(result)); return result; },
				(error) => { console.log(JSON.stringify(error)); return error; }
			);
		}
	});

	context.subscriptions.push(loadScriptsCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
