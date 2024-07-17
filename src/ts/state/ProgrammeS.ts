import { Selectable } from "../../components/dashboard/form-controls/interfaces/MultipleSelectI";
import Course from "../models/Course";
import Programme from "../models/Programme";
import WithImage from "./WithImage";
interface SelectableCourse extends Course, Selectable {
  id: number;
}
export default interface ProgrammeS extends Programme, WithImage {
  checkedCourses?: SelectableCourse[];
  courses?: SelectableCourse[];
}
