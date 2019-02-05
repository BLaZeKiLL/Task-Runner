import { TreeDataProvider, Event, TreeItem, ProviderResult, EventEmitter } from "vscode";
import { ScriptItem } from "./Script";

export class ScriptProvider implements TreeDataProvider<ScriptItem> {

  private _onDidChangeTreeData: EventEmitter<ScriptItem | undefined> = new EventEmitter<ScriptItem | undefined>();
  readonly onDidChangeTreeData: Event<ScriptItem | undefined> = this._onDidChangeTreeData.event;

  private items: ScriptItem[] = [];
  
	refresh(items: ScriptItem[]): void {
    this.items = items;
		this._onDidChangeTreeData.fire();
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


}