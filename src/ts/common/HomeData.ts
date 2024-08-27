import Entity from "../interfaces/Entity";
import Feed from "../models/Feed";
import Programme from "../models/Programme";

interface HomeData {
  feeds: Feed[];
  programmes: Programme[];
  instituteData: Entity;
}
export default HomeData;
