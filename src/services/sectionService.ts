import * as Section from "./models/section";

export function getAllSections() {
  return Section.findAll();
}

export function getNewsSections() {
  return Section.findAll("news");
}

export function getStaffSections() {
  return Section.findAll("persons");
}

export function getNavSections() {
  return Section.findAll("nav");
}

export function getFooterSections() {
  return Section.findAll("footer");
}
