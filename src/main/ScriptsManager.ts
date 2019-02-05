import { Script, ScriptItem } from "./Script";

export class ScriptManager {

  private static scripts: Script[]

  public static refreshScripts(scripts: string[]): ScriptItem[] {
    this.scripts = [];
    const items: ScriptItem[] = [];

    console.log(`SCRIPTS: ${JSON.stringify(scripts)}`);
    scripts.forEach((script: string) => {
      this.scripts.push(new Script(script));
      items.push(new ScriptItem(script));
    });

    return items;
  }

  public static get Scripts(): Script[] {
    return this.scripts;
  }

}