import InputI, { TranslatableValue } from './interfaces/InputI';
import { Input } from '@nextui-org/react';
import React from 'react';
import { useFormContext } from '../forms/context/FormContext';

const TextFeild = ({
  name,
  label,
  value,
  onChange,

  translatable,
}: InputI) => {
  const { lang, handleChangeUpdated } = useFormContext();
  const inputValue = translatable ? value && value[lang] : value;
  return (
    <Input
      fullWidth
      label={label}
      name={name}
      value={inputValue || ''}
      className="mb-2"
      onChange={(e) => {
        if (typeof handleChangeUpdated === 'function')
          handleChangeUpdated(Boolean(translatable), value, e.target, onChange);
        else {
          if (onChange) onChange(e.target);
        }
      }}
      // {...rest}
    />
  );
};

export default TextFeild;
