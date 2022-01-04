import create from "zustand";

const store = (set, get) => {
  const add = (object) => {
    set((state) => {
      const objects = [].concat(state.objects);
      objects.push(object);
      return { objects };
    });
  };
  const remove = (object) => {
    set((state) => {
      const objects = state.objects;
      const foundObjectIndex = objects.findIndex((o) => o === object);
      if (foundObjectIndex) {
        objects.findIndex.splice(foundObjectIndex, 1);
      }
      return { objects };
    });
  };

  const clear = () => {
    const objects = [];
    set((state) => ({ objects }));
  };
  return {
    objects: [],
    add,
    remove,
    clear
  };
};

export const useObjectStore = create(store);
