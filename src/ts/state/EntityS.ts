import WithImage from "./WithImage";
import Entity from "../models/Entity";
import { SelectableStaff } from "../common/Selectables";

export default interface EntityS extends WithImage, Entity {
  checkedStaff?: SelectableStaff[];
  presidents?: SelectableStaff[];
}
