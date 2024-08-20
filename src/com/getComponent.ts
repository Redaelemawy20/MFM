// import gallary from "./gallary";

import gallary from "./gallary";

export default (code: string) => {
  const found = gallary.find((g) => g.componentId === code);
  if (!found) return null;
  return found;
};
