"use client";
import HandleChange, {
  HandleTranslatableChange,
} from "@/ts/common/HandleChange";
import HandleFileUpload, {
  HandleDeleteFile,
} from "@/ts/common/HandleFileUpload";
import Translatable, { Lang } from "@/ts/common/Translatable";
import { AttachedFiles } from "@/ts/state/WithFiles";
import { useState } from "react";

const useStateManager = <T>(data: T) => {
  const [state, setState] = useState<T>(data);
  const [files, setFiles] = useState({} as { [key: string]: any });
  const [lang, setLang] = useState<Lang>("en");
  const handleChange: HandleChange = (target): void => {
    const { name, value } = target;

    setState({ ...state, [name]: value });
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
  const onUpload = (filename: string, file: File) => {
    const clonedFiles = { ...files };
    clonedFiles[filename] = file;
    setFiles(clonedFiles);
  };
  const onRemove = (filename: string) => {
    const clonedFiles = { ...files };
    delete clonedFiles[filename];
    setFiles(clonedFiles);
  };
  const handleDeleteFile: HandleDeleteFile<T> = <K extends keyof T>(
    id: number,
    file: K
  ) => {
    let attachedFiles = { ...(state[file] as AttachedFiles) };
    let files = attachedFiles.Files ?? [];

    // let deleted = attachedFiles.deletedFiles ?? [];

    // deleted.push(files[id]);
    let updatedIndices = attachedFiles.updatedIndices
      ? [...attachedFiles.updatedIndices]
      : [];
    updatedIndices[id] = 2;
    attachedFiles.updatedIndices = updatedIndices;
    files = files.filter((file, index) => {
      return index !== id;
    });
    attachedFiles.Files = files;
    // setState({ ...state, [file]: attachedFiles });
    setState((prev) => {
      return { ...prev, [file]: attachedFiles };
    });
  };
  const handleMultiSelectChange: HandleChange = ({ name, value }) => {
    const newValue = typeof value === "string" ? value.split(",") : value;
    setState({ ...state, [name]: newValue });
  };
  return {
    state,
    files,
    lang,
    setLang,
    handleTranslatableChange,
    handleChange,
    onUpload,
    onRemove,
    handleDeleteFile,
    handleMultiSelectChange,
    setState,
  };
};

export default useStateManager;
