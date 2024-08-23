import HasId from "../common/HasId";
export interface PreviwableImage {
  image?: File;
  preview?: string;
}

export default interface WithImage extends HasId {
  mainImage?: PreviwableImage;
}
