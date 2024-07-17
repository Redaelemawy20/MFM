import HandleChange from "../../../../ts/common/HandleChange";

export default interface MultiPointInterface {
  name: string;
  label: string;
  value: string[];
  error?: string;
  onValidate?: HandleChange;
  onChange: HandleChange;
}
export interface PointInterface {
  point: string;
  onChange: (id: number, value: string) => void;
  onDelete: (id: number) => void;
  label?: string;
  id: number;
}
