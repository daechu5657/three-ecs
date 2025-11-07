export default class ComponentManager {
  private components = new Map<string, any>();

  register(name: string, schema: any) {
    this.components.set(name, schema);
  }

  get(name: string) {
    return this.components.get(name);
  }

  getTypeIndex() {
    //
  }
}
