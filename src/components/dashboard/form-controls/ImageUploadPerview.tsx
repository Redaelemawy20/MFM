"use client";
import React from "react";
import ImageUploadPerviewI from "./interfaces/ImageUploadPerviewI";
import { Button, Image } from "@nextui-org/react";
import { CiSquareRemove } from "react-icons/ci";
import { useFormContext } from "../forms/context/FormContext";
import { TranslatableValue } from "./interfaces/InputI";
import { extractImgSrc } from "@/utils/get-img";
const ImageUploadPerview: React.FunctionComponent<ImageUploadPerviewI> = ({
  onChange,
  name,
  value,
  alt,
  btnText = "Upload Image",
  translatable,
}) => {
  const { lang, handleChangeUpdated, handleFileUpload, handleFileRemove } =
    useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if (target.files) {
      const uploadedFile = target.files[0];
      const filename = Date.now() + uploadedFile.name;
      let translatedFilename = translatable ? filename + lang : filename;

      const Image = {
        image: uploadedFile,
        preview: URL.createObjectURL(uploadedFile),
        name: translatedFilename,
      };
      handleChangeUpdated(
        Boolean(translatable),
        value,
        { name, value: Image },
        onChange
      );

      handleFileUpload(translatedFilename, uploadedFile);
    }
  };
  const handleRemove = () => {
    handleChangeUpdated(
      Boolean(translatable),
      value,
      { name, value: {} },
      onChange
    );

    handleFileRemove(value.name);
  };
  const getSrc = () => {
    let obj;
    if (translatable) {
      obj = (value ? { ...value[lang] } || {} : {}) as TranslatableValue;
    } else {
      obj = value ?? {};
    }
    if (obj.image) return obj.preview;

    if (obj._s) return `/api/files?name=${obj._s}`;
    return "";
  };

  return (
    <div className="flex flex-col items-center content-center mb-2">
      <Image
        fallbackSrc={
          "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        }
        src={getSrc()}
        width={240}
        height={240}
        alt={alt}
        className="!opacity-100 shadow-sm"
      />
      <div className="flex flex-row gap-1 mt-2">
        <input
          type="file"
          hidden
          name={`img-input${name}`}
          accept="image/*"
          id={`img-input${name}`}
          onChange={handleChange}
        />
        <Button>
          <label htmlFor={`img-input${name}`}>{btnText}</label>
        </Button>

        <CiSquareRemove onClick={handleRemove} />
      </div>
    </div>
  );
};

export default ImageUploadPerview;
