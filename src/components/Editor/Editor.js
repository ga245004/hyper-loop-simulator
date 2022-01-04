import { BoxObject } from "../Objects/BoxObject";
import { useObjectStore } from "../useObjectStore";
import "./Editor.css";

export const Editor = () => {
  const addObject = useObjectStore((state) => state.add);
  const addBox = (events) => {
    addObject(<BoxObject />);
  };
  return (
    <div className="editor">
      <button className="menu" onClick={addBox}>
        Box
      </button>
    </div>
  );
};
