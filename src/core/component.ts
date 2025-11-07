type FieldSchema = Record<string, "float32" | "int32">;

const defineComponent = <T extends FieldSchema>(name: string, schema: T) => {
  const size = Object.keys(schema).length * 4;

  class Component {
    static size = size;
    static schema = schema;
  }

  Object.defineProperty(Component, "name", { value: name });

  return Component as {
    new (): Component;
    readonly size: number;
    readonly schema: T;
  };
};

type Component = ReturnType<typeof defineComponent>;

export { defineComponent, type Component };
