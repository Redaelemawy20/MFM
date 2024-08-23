import React from "react";

import { HandleChange } from "../../../../ts/common/HandleChange";
import { NormalInput, TranslatableInput } from "./InputI";

interface BaseAccordion<T> {
  childs: (
    item: T,
    onChildChange: HandleChange,
    index?: number
  ) => Partial<{
    [key in keyof T]: () => React.ReactNode;
  }>;
  name: string;
  getTitle: (item: T) => string;

  onValidate?: HandleChange;
  error?: string | null;
  onChange?: HandleChange;
  onDelete?: (i: number) => void;
  onlyOne?: boolean;
}

type AccordionI<T> = BaseAccordion<T> &
  (NormalInput<T[]> | TranslatableInput<T[]>);
export default AccordionI;
