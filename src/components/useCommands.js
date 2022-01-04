const commandsCallbacks = [];
const isLog = false;
function log() {
  isLog && console.log(arguments);
}

const subscribeCommand = (type, callback) => {
  log("subscribeCommand", commandsCallbacks, type, callback);
  commandsCallbacks.push({
    type,
    callback
  });
};

const unSubscribeCommand = (type, callback) => {
  const findIndex = commandsCallbacks.findIndex(
    (c) => c.type === type && c.callback === callback
  );
  log("unSubscribeCommand", commandsCallbacks, type, callback, findIndex);
  if (findIndex !== -1) {
    commandsCallbacks.splice(findIndex, 1);
  }
};

const executeCommand = (type, action) => {
  log("executeCommand", commandsCallbacks, type);
  const findCommands = commandsCallbacks.filter((c) => c.type === type);
  log("executeCommand", findCommands, action);
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
