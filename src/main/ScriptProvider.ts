import { TreeDataProvider, Event, TreeItem, ProviderResult, EventEmitter, TreeItemCollapsibleState, tasks } from "vscode";
import { ScriptManager } from "./ScriptsManager";

export class ScriptProvider implements TreeDataProvider<ScriptItem> {

  private _onDidChangeTreeData: EventEmitter<ScriptItem | undefined> = new EventEmitter<ScriptItem | undefined>();
  readonly onDidChangeTreeData: Event<ScriptItem | undefined> = this._onDidChangeTreeData.event;
  
  private items: ScriptItem[];

  constructor() {
    this.items = [];
    this.taskLoader();
  }

	refresh(): void {
    this.items = [];
    ScriptManager.clear();
    this.taskLoader();
  }

  getTreeItem(element: ScriptItem): TreeItem | Thenable<TreeItem> {
    return element;
  }

  getChildren(element?: ScriptItem | undefined): ProviderResult<ScriptItem[]> {
    if (!element) {
      return Promise.resolve(this.items);
    } else {
      return Promise.resolve([]);
    }
  }

  private taskLoader() {
    tasks.fetchTasks({type: 'npm'}).then((tasks) => {
      tasks.forEach((task) => {
        this.items.push(new ScriptItem(task.name));
        ScriptManager.addTask(task);
      });
      this._onDidChangeTreeData.fire();
    });
  }

}

export class ScriptItem extends TreeItem {

	constructor(
    public readonly label: string
	) {
    super(label, TreeItemCollapsibleState.None);
  }

  get description(): string {
    return 'npm script';
  }

}