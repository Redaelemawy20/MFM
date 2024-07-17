import WithImage from "./WithImage";
import Sector from "../models/Sector";
import { AttachedFiles } from "./WithFiles";

export default interface SectorS extends WithImage, Sector {
  Plans?: AttachedFiles;
  Report?: AttachedFiles;
  files?: AttachedFiles;
}
