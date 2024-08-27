import HasId from "./HasId";
export interface PreviwableImage {
  image?: File;
  preview?: string;
}

export default interface WithImage extends HasId {
  mainImage?: PreviwableImage;
}
