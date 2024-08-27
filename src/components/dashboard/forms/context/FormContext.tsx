"use client";
// FormContext.js
import useStateManager from "@/hooks/useStateManager";
import {
  HandleChange,
  HandleChangeUpdated,
  HandleFileRemove,
  HandleFileUpload,
} from "@/ts/common/HandleChange";
import { HTMLFormAction } from "@/ts/common/FormActionType";
import React, { createContext } from "react";

type BaseContextType = {
  state: any;
  action: HTMLFormAction;
  errorMessage?: string;
  lang: "en" | "ar";
  handleChange: HandleChange;
  handleChangeUpdated: HandleChangeUpdated;
  setLang: (lang: "en" | "ar") => void;
  handleFileUpload: HandleFileUpload;
  handleFileRemove: HandleFileRemove;
  files: { [key: string]: any };
};
type AdditionalValues = {
  [key: string]: any;
};
export type ContextType = BaseContextType & AdditionalValues;
const FormContext = createContext<ContextType>({} as ContextType);
export function FormProvider<T, D>({
  children,
  data,
  action,
  ...rest
}: {
  children: React.ReactNode;
  action: HTMLFormAction;
  data: D;
} & T) {
  const {
    state,
    lang,
    handleChange,
    setLang,
    handleChangeUpdated,
    handleFileUpload,
    handleFileRemove,
    files,
  } = useStateManager(data);
  return (
    <FormContext.Provider
      value={{
        handleChange,
        lang,
        state,
        setLang,
        handleChangeUpdated,
        handleFileUpload,
        handleFileRemove,
        action,
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
