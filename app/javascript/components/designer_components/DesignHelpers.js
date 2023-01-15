export const getValOf = (storeOpts, path) => {
  return path.split(".").reduce(function (prev, curr) {
    return prev[curr];
  }, storeOpts);
};

export const changeValOf = (storeOpts, setStoreOpts, path, newValue) => {
  const opts = storeOpts;
  const nodeList = path.split(".");
  const propToChange = nodeList.pop();
  let lastNode;
  nodeList.forEach((node) => {
    if (lastNode) {
      lastNode = lastNode[node];
    } else {
      lastNode = opts[node];
    }
  });
  lastNode[propToChange] =
    newValue === "bool" ? !lastNode[propToChange] : newValue;
  setStoreOpts({ ...opts });
};
