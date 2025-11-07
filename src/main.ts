import { defineComponent } from "./core/component";
import World from "./core/world";

const Velocity = defineComponent("Velocity", {
  x: "float32",
  y: "float32",
  z: "float32",
});

const world = new World();

const entityManager = world.entityManager;

const archetype = entityManager.createArchetype([Velocity]);

// const entity = world.entityManager.createEntity();

// world.entityManager.setComponentData<Position>(
//   entity,
//   Position,
//   new Float32Array(3)
// );
