'use client';
// FormContext.js
import useStateManager from '@/hooks/useStateManager';
import {
  HandleChange,
  HandleChangeUpdated,
  HandleFileRemove,
  HandleFileUpload,
} from '@/ts/common/HandleChange';
import { HTMLFormAction } from '@/ts/common/FormActionType';
import React, { createContext } from 'react';
import FormProps from '@/ts/interfaces/FormProps';

type BaseContextType = {
  state: any;
  lang: 'en' | 'ar';
  handleChange: HandleChange;
  handleChangeUpdated: HandleChangeUpdated;
  setLang: (lang: 'en' | 'ar') => void;
  handleFileUpload: HandleFileUpload;
  handleFileRemove: HandleFileRemove;
  files: { [key: string]: any };
} & FormProps;
type AdditionalValues = {
  [key: string]: any;
};
export type ContextType = BaseContextType & AdditionalValues;
const FormContext = createContext<ContextType>({} as ContextType);
export function FormProvider<T, D>({
  children,
  data,
  ...rest
}: {
  children: React.ReactNode;
  data: D;
} & T &
  FormProps) {
  const {
    state,
    lang,
    handleChange,
    setLang,
    handleChangeUpdated,
    handleFileUpload,
    handleFileRemove,
    files,
    setState,
  } = useStateManager(data);
  return (
    <FormContext.Provider
      value={{
        handleChange,
        lang,
        state,
        setState,
        setLang,
        handleChangeUpdated,
        handleFileUpload,
        handleFileRemove,
        files,
        ...rest,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = function <T = ContextType>() {
  return React.useContext<T>(FormContext as any);
};
