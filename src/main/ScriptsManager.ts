import { Script } from "./Script";

export class ScriptManager {

  private static scripts: Script[];

  public static addScripts(scripts: string[]) {
    scripts.forEach((script: string) => {
      this.scripts.push(new Script(script));
    });
  }

  public static getScripts(): Script[] {
    return this.scripts;
  }

}