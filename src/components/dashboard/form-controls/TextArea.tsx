import React from 'react';
import TextAreaI from './interfaces/TextAreaI';
import { Textarea } from '@nextui-org/react';
import { useFormContext } from '../forms/context/FormContext';

export default function ({
  name,
  label,
  value,
  onChange,
  translatable,
  placeholder,
  rows = 5,
}: TextAreaI) {
  const { handleChangeUpdated, lang } = useFormContext();
  let inputValue;
  if (translatable) {
    inputValue = value ? value[lang] : '';
  } else inputValue = value;
  // let inputValue = translatable ? value &&value[lang] : value;
  return (
    <Textarea
      fullWidth
      label={label}
      placeholder={placeholder}
      name={name}
      className="mb-2"
      value={inputValue}
      onChange={(e) => {
        handleChangeUpdated(Boolean(translatable), value, e.target, onChange);
      }}
      rows={rows}
    />
  );
}
