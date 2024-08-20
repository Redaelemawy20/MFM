import { sectionsGallary } from "@/com/gallary";

export const getEditComponent = (componentId: string) => {
  const found = sectionsGallary.find((c) => c.componentId === componentId);
  if (found) return found.componentEdit;

  return null;
};
