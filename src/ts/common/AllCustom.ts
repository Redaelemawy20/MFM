type AllCustom<T, C> = {
  [K in keyof T]: C;
};
export default AllCustom;
