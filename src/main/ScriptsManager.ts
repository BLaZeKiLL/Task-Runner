import { Script } from "./Script";

export class ScriptManager {

  private static scripts: Script[];

  public static addScripts(scripts: string[]) {
    console.log(`SCRIPTS: ${JSON.stringify(scripts)}`);
    scripts.forEach((script: string) => {
      this.scripts.push(new Script(script));
    });
  }

  public static getScripts(): Script[] {
    return this.scripts;
  }

}