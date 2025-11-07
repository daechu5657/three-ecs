import { type Component } from "./component";

export default class EntityManager {
  //  EntityManager
  //      ├─ ArchetypeMap : ComponentTypeSet → Archetype
  //      ├─ Archetype : Chunk[]
  //      └─ ComponentTypeRegistry : ComponentType → ID
  constructor() {}

  /**
   * 새 엔티티를 만듭니다.
   */
  createEntity() {
    // return entity
    return;
  }

  /**
   * 기존 엔티티를 복사하고 해당 사본에서 새 엔티티를 만듭니다.
   */
  instantiate() {}

  /**
   * 기존 엔티티를 삭제합니다.
   */
  destroyEntity() {}

  /**
   * 기존 엔터티에 구성 요소를 추가합니다.
   */
  addComponent(...args: any) {
    return this;
  }

  /**
   * 기존 엔티티에서 컴포넌트를 제거합니다.
   */
  removeComponent() {}

  /**
   * 엔터티 구성 요소의 값을 검색합니다.
   */
  getComponent() {}

  /**
   * 엔터티 구성 요소의 값을 덮어씁니다.
   */
  setComponent() {}

  /**
   * 엔터티의 구성 요소 값을 설정합니다
   */
  setComponentData<T extends Component>(entity: any, component: T, args: any) {}

  /**
   * 엔터티의 구성 요소 값을 불러옵니다
   */
  getComponentData() {}

  /**
   * 구성 요소 유형 집합에서 원형을 만듭니다.
   */
  createArchetype(components: Component[]) {
    //
  }
}
