import { useCommands } from "../useCommands";
import "./Editor.css";

export const Editor = () => {
  const addBox = (events) => {
    commands.execute("add", {
      turn: ""
    });
  };

  const addLeftBox = (events) => {
    commands.execute("add", {
      turn: "left"
    });
  };

  const addRightBox = (events) => {
    commands.execute("add", {
      turn: "right"
    });
  };

  const clearBoxes = (events) => {
    commands.execute("clear", {});
  };

  const commands = useCommands();

  return (
    <div className="editor">
      <button className="menu" onClick={addBox}>
        Box
      </button>
      <button className="menu" onClick={addLeftBox}>
        Left
      </button>
      <button className="menu" onClick={addRightBox}>
        Right
      </button>
      <button className="menu" onClick={clearBoxes}>
        Clear
      </button>
    </div>
  );
};
