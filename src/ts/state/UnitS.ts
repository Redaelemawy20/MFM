import { Selectable } from "./../../components/dashboard/form-controls/interfaces/MultipleSelectI";
import Device from "../models/Device";
import Unit from "../models/Unit";
import WithImage from "./WithImage";

interface SelectableDevice extends Device, Selectable {
  id: number;
}
export default interface Units extends Unit, WithImage {}
