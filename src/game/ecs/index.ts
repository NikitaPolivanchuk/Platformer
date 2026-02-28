/**
 * All supported component type identifiers.
 *
 * These string literals act as keys in the ECS component store.
 * Each key maps to a collection of entity → component data.
 */
export type Component =
  | 'transform'
  | 'collider'
  | 'rigidbody'
  | 'sprite'
  | 'animatedSprite'
  | 'control'
  | 'animationController'
  | 'camera'
  | 'pathMovement'
  | 'background'
  | 'playerState';

/**
 * Minimal Entity Component System (ECS) implementation.
 *
 * Stores component data by component type and entity id.
 * Entities are represented by unique `symbol` identifiers.
 *
 * This implementation:
 * - Stores only data (no systems)
 * - Allows dynamic component registration
 * - Supports simple entity queries
 */
export default class Ecs {
  /**
   * Whether simulation systems should update.
   * Rendering may still occur while paused.
   */
  public paused: boolean = false;

  /**
   * Internal component storage.
   */
  private components: Map<Component, Map<symbol, object>> = new Map();

  /**
   * Removes an entity and all of its components.
   *
   * @param id - Entity identifier.
   */
  removeEntity(id: symbol) {
    this.components.forEach((component) => component.delete(id));
  }

  /**
   * Adds or replaces a component on an entity.
   *
   * If the component type does not yet exist in storage,
   * it will be initialized automatically.
   *
   * @typeParam T - Component data type.
   * @param id - Entity identifier.
   * @param name - Component type.
   * @param data - Component data object.
   */
  addComponent<T extends object>(id: symbol, name: Component, data: T) {
    if (!this.components.has(name)) {
      this.components.set(name, new Map());
    }
    this.components.get(name)!.set(id, data);
  }

  /**
   * Retrieves a component from an entity.
   *
   * @typeParam T - Expected component type.
   * @param id - Entity identifier.
   * @param name - Component type.
   * @returns Component data or `undefined` if not found.
   */
  getComponent<T extends object>(id: symbol, name: Component) {
    return this.components.get(name)?.get(id) as T | undefined;
  }

  /**
   * Removes a specific component from an entity.
   *
   * @param id - Entity identifier.
   * @param name - Component type.
   */
  removeComponent(id: symbol, name: Component) {
    this.components.get(name)?.delete(id);
  }

  /**
   * Returns all entities that contain every specified component.
   *
   * The first component type is used as the base set,
   * and the remaining component types are intersected.
   *
   * @param componentNames - Component types required.
   * @returns Array of matching entity ids.
   */
  entitiesWith(...componentNames: Component[]) {
    const [first, ...rest] = componentNames;
    const firstMap = this.components.get(first);

    if (!firstMap) {
      return [];
    }

    return [...firstMap.keys()].filter((e) => rest.every((c) => this.components.get(c)?.has(e)));
  }

  /**
   * Returns all components of a specific type.
   *
   * Useful for systems that operate on a single component class.
   *
   * @typeParam T - Component data type.
   * @param name - Component type.
   * @returns Array of [entityId, componentData] tuples.
   */
  componentsOfType<T extends object>(name: Component) {
    const map = this.components.get(name);
    if (!map) {
      return [];
    }

    return [...map.entries()] as [symbol, T][];
  }
}
