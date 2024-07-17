type EnsureTheValueOfKeyIsWithType<T, K extends keyof T, V> = T[K] extends V
  ? K
  : never;

export default EnsureTheValueOfKeyIsWithType;
