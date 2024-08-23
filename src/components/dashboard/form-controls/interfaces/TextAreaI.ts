import InputI from "./InputI";

// export default interface TextAreaI extends InputI {
//   // rows?: number;
// }
type TextAreaI = InputI & {
  rows?: number;
};
export default TextAreaI;
