export const render = <T>(path: string, tag: string, args?: T) => {
  try {
    import(/* @vite-ignore */ `${path}?v=${Date.now()}`);
  } catch (error) {
    error && console.error(error);
  }

  console.log("args", args);

  const element = document.createElement(tag || "div");

  Object.entries(args).forEach(([name, key]) => {
    element[name] = key;
  });

  return element;
};
