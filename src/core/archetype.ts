import type Chunk from "./chunk";
import type { Component } from "./component";

export default class Archetype {
  components: any[];
  chunks: Chunk[] = [];

  constructor(components: Component[]) {
    this.components = components;
  }
}
