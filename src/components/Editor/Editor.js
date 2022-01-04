import { useCommands } from "../useCommands";
import "./Editor.css";

export const Editor = () => {
  const commands = useCommands();

  const addBox = (events) => {
    commands.execute("add", [
      {
        turn: ""
      }
    ]);
    console.log("added box");
  };

  const addLeftBox = (events) => {
    commands.execute("add", [
      {
        turn: "left"
      },
      {
        turn: ""
      }
    ]);
    console.log("added left box");
  };

  const addRightBox = (events) => {
    commands.execute("add", [
      {
        turn: "right"
      },
      {
        turn: ""
      }
    ]);

    console.log("added right box");
  };

  const clearBoxes = (events) => {
    commands.execute("clear", {});
  };

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
