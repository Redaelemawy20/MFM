import { Checkbox } from "@nextui-org/react";
import CheckBoxI from "./interfaces/CheckBoxI";

export default function ({
  name,
  label,
  value,
  error,
  onChange,
  onValidate,
  rest = {},
}: CheckBoxI) {
  const checked = value ? true : false;
  return (
    <Checkbox
      name={name}
      defaultSelected={checked}
      // value={value as string}
      checked={checked}
      className="mb-2"
      onChange={(e) => {
        onChange({ name, value: !value });
        onValidate && onValidate(e.target);
      }}
      // {...rest}
    >
      {label}
    </Checkbox>
  );
}
