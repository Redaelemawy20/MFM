"use client";
import { Radio, RadioGroup } from "@nextui-org/react";
import { Lang } from "../../../ts/common/Translatable";

export default function LanguageSelect({
  value = "en",
  onChange,
}: {
  value: Lang;
  onChange: (lang: Lang) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value as Lang);
  };

  return (
    <>
      <h2>Language</h2>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <Radio value="ar">arabic</Radio>
        <Radio value="en">english</Radio>
      </RadioGroup>
    </>
  );
}
