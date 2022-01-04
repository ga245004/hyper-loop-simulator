export const updatePosition = (
  turn,
  position = [0, 0, 0],
  direction = "X",
  step = 1
) => {
  console.log("update Position", turn, [].concat(position), direction, step);

  if (direction === "X") {
    position[0] += step;
  } else if (direction === "Z") {
    position[2] += step;
  }

  if (direction === "X" && turn === "left" && step > 0) {
    direction = "Z";
    step = -1;
  } else if (direction === "X" && turn === "left" && step < 0) {
    direction = "Z";
    step = +1;
  } else if (direction === "X" && turn === "right" && step > 0) {
    direction = "Z";
    step = +1;
  } else if (direction === "X" && turn === "right" && step < 0) {
    direction = "Z";
    step = -1;
  } else if (direction === "Z" && turn === "left" && step > 0) {
    direction = "X";
    step = -1;
  } else if (direction === "Z" && turn === "left" && step < 0) {
    direction = "X";
    step = -1;
  } else if (direction === "Z" && turn === "right" && step > 0) {
    direction = "X";
    step = +1;
  } else if (direction === "Z" && turn === "left" && step < 0) {
    direction = "X";
    step = +1;
  }
  console.log("updated Position", turn, [].concat(position), direction, step);

  return {
    direction,
    step,
    position
  };
};
