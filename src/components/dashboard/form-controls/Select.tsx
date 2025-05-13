'use client';
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import SelectInputProps from './interfaces/SelectInputI';

export default function SelectInput<T extends Record<string, any>>({
  name,
  label,
  onChange,
  onValidate,
  options,
  value,
  valueProp = 'id' as keyof T,
  optionValue = 'name' as keyof T,
  className,
  placeholder,
  required,
}: SelectInputProps<T>) {
  const getValueOfOption = (option: T) => {
    if (typeof option[valueProp] === 'string') {
      return option[valueProp];
    }
    return String(option[valueProp]);
  };
  const getLabelOfOption = (option: T) => {
    if (typeof option[optionValue] === 'string') {
      return option[optionValue];
    }
    return String(option[optionValue]);
  };

  return (
    <div className={`mb-4 ${className || ''}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Select
        fullWidth
        label={placeholder}
        name={name}
        value={value}
        isRequired={required}
        className="w-full"
        onChange={(e) => {
          if (onChange) onChange(e.target as HTMLSelectElement);
          if (onValidate) onValidate(e.target as HTMLSelectElement);
        }}
      >
        {options.map((option, index) => (
          <SelectItem
            key={String(option[valueProp]) || index}
            value={getValueOfOption(option)}
          >
            {getLabelOfOption(option)}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
