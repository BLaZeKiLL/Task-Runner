import { Task } from "vscode";

export class ScriptManager {

  private static tasks: Map<string, Task> = new Map<string, Task>();

  public static addTask(task: Task): void {
    this.tasks.set(task.name, task);
  }

  public static getTask(name: string): Task | undefined {
    return this.tasks.get(name);
  }

  public static clear(): void {
    this.tasks.clear();
  }

}