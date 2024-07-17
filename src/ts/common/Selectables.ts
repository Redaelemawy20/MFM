import { Selectable } from "../../components/dashboard/form-controls/interfaces/MultipleSelectI";
import Device from "../models/Device";
import Unit from "../models/Unit";
import User from "../models/User";

export interface SelectableUnit extends Selectable, Unit {
  id: number;
}
export interface SelectableStaff extends Selectable, User {
  id: number;
}
export interface SelectableDevice extends Selectable, Device {
  id: number;
}
