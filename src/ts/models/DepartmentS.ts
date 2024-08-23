import Department from "../models/Department";

import WithImage from "./WithImage";
import { AttachedFiles } from "./WithFiles";
import {
  SelectableDevice,
  SelectableStaff,
  SelectableUnit,
} from "../common/Selectables";

export default interface DepartmentS extends Department, WithImage {
  checkedUnits?: SelectableUnit[];
  checkedStaff?: SelectableStaff[];
  checkedDevices?: SelectableDevice[];
  staff?: SelectableStaff[];
  units?: SelectableUnit[];
  devices?: SelectableDevice[];
  research?: AttachedFiles;
  project?: AttachedFiles;
  files?: AttachedFiles;
}
