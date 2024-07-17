export type Lang = "en" | "ar";
type Translatable<T> = {
  [key in Lang]: T;
};

export default Translatable;
