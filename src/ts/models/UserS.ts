import Role from "../models/Role";
import User from "../models/User";
import { AttachedFiles } from "./WithFiles";
import { PreviwableImage } from "./WithImage";

export default interface UserS extends User {
  avatar?: PreviwableImage;
  cv?: AttachedFiles;
  roles?: Role[];
}
