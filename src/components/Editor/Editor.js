import { BoxObject } from "../Objects/BoxObject";
import { useCommands } from "../useCommands";
import { useObjectStore } from "../useObjectStore";
import "./Editor.css";

export const Editor = () => {
  const addBox = (events) => {
    commands.execute("add", {
      color: "#ff9999"
    });
  };

  const commands = useCommands();

  return (
    <div className="editor">
      <button className="menu" onClick={addBox}>
        Box
      </button>
    </div>
  );
};
