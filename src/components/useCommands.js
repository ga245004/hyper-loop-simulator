import { useState } from "react";

const commandsCallbacks = [];

const subscribeCommand = (type, callback) => {
  console.log("subscribeCommand", commandsCallbacks, type, callback);
  commandsCallbacks.push({
    type,
    callback
  });
};

const unSubscribeCommand = (type, callback) => {
  const findIndex = commandsCallbacks.findIndex(
    (c) => c.type === type && c.callback === callback
  );
  console.log(
    "unSubscribeCommand",
    commandsCallbacks,
    type,
    callback,
    findIndex
  );
  if (findIndex !== -1) {
    commandsCallbacks.splice(findIndex, 1);
  }
};

const executeCommand = (type, action) => {
  console.log("executeCommand", commandsCallbacks, type);
  const findCommands = commandsCallbacks.filter((c) => c.type === type);
  console.log("executeCommand", findCommands, action);
  if (findCommands.length) {
    findCommands.forEach((c) => {
      c.callback(action);
    });
  }
};

export const useCommands = () => ({
  subscribe: subscribeCommand,
  unSubscribe: unSubscribeCommand,
  execute: executeCommand
});
