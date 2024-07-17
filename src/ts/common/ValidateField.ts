type ValidateField<T> = <K extends keyof T>(name: K, value: T[K]) => void;

export default ValidateField;