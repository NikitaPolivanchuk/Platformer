type Component =
  | 'transform'
  | 'collider'
  | 'rigidbody'
  | 'sprite'
  | 'animatedSprite'
  | 'control'
  | 'animationController'
  | 'camera';

export default class Ecs {
  private components: Map<Component, Map<symbol, object>> = new Map();

  addComponent<T extends object>(id: symbol, name: Component, data: T) {
    if (!this.components.has(name)) {
      this.components.set(name, new Map());
    }
    this.components.get(name)!.set(id, data);
  }

  getComponent<T extends object>(id: symbol, name: Component) {
    return this.components.get(name)?.get(id) as T | undefined;
  }

  removeComponent(id: symbol, name: Component) {
    this.components.get(name)?.delete(id);
  }

  entitiesWith(...componentNames: Component[]): symbol[] {
    const [first, ...rest] = componentNames;
    const firstMap = this.components.get(first);
    if (!firstMap) {
      return [];
    }
    return [...firstMap.keys()].filter((e) =>
      rest.every((c) => this.components.get(c)?.has(e)),
    );
  }
}
