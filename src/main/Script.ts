import { exec } from "child_process";
import { window } from "vscode";

export class Script {

  private command: string;

  constructor(command: string) {
    this.command = command;
  }

  public run(): void {
    exec(`npm run ${this.command}`, (error) => {
      if (error) { window.showErrorMessage('NPM ERROR'); }
      else { window.showInformationMessage(`${this.command} executed`); }
    });
  }

  public get Name(): string {
    return this.command;
  }

}