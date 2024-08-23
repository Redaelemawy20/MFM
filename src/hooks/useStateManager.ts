"use client";
import { TranslatableValue } from "@/components/dashboard/form-controls/interfaces/InputI";
import {
  HandleChange,
  HandleChangeUpdated,
  HandleFileRemove,
  HandleFileUpload,
} from "@/ts/common/HandleChange";
import Translatable, { Lang } from "@/ts/common/Translatable";
import { useState } from "react";

const useStateManager = <T>(data: T) => {
  const [state, setState] = useState<T>(data);
  const [files, setFiles] = useState({} as { [key: string]: any });
  const [lang, setLang] = useState<Lang>("en");
  const handleChange: HandleChange = (target): void => {
    const { name, value } = target;

    setState({ ...state, [name]: value });
  };
  const handleChangeUpdated: HandleChangeUpdated = (
    translatable,
    oldValue,
    target,
    onChange
  ) => {
    let clonedValue;
    if (translatable) {
      clonedValue = oldValue ? { ...oldValue } : ({} as TranslatableValue);
      clonedValue[lang] = target.value;
    } else {
      clonedValue = target.value;
    }

    if (onChange) {

      onChange({ name: target.name, value: clonedValue });
    } else {
     

      handleChange({ name: target.name, value: clonedValue });
    }
  };
  const handleTranslatableChange: HandleChange = (
    { name, value },
    l = lang
  ): void => {
    const translatableValue = {
      ...((state["content" as keyof T] as Translatable<any>) || {
        en: {},
        ar: {},
      }),
    };
    translatableValue[l][name] = value;
    setState((prev) => {
      return { ...prev, content: translatableValue };
    });
  };
  const handleFileUpload: HandleFileUpload = (filename: string, file: File) => {
    const clonedFiles = { ...files };
    clonedFiles[filename] = file;
    setFiles(clonedFiles);
  };
  const handleFileRemove: HandleFileRemove = (filename: string) => {
    const clonedFiles = { ...files };
    delete clonedFiles[filename];
    setFiles(clonedFiles);
  };

  const handleMultiSelectChange: HandleChange = ({ name, value }) => {
    const newValue = typeof value === "string" ? value.split(",") : value;
    setState({ ...state, [name]: newValue });
  };

  return {
    state,
    files,
    lang,
    handleChangeUpdated,
    setLang,
    handleTranslatableChange,
    handleChange,
    handleFileUpload,
    handleFileRemove,
    handleMultiSelectChange,
    setState,
  };
};

export default useStateManager;
