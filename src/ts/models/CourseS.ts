import Course from "../models/Course";
import WithImage from "./WithImage";
type CourseType = { id: number; value: string };
export default interface CourseS extends Course, WithImage {
  categories: CourseType[];
  classifications: CourseType[];
  parts: CourseType[];
}
