"use client";
import React, { FormEvent } from "react";
import ImageUploadPerviewI from "./interfaces/ImageUploadPerviewI";
import { Avatar, Button, Image } from "@nextui-org/react";
import { CiSquareRemove } from "react-icons/ci";
const ImageUploadPerview: React.FunctionComponent<ImageUploadPerviewI> = ({
  onChange,
  onUpload,
  onRemove,
  name,
  value,
  alt,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if (target.files) {
      const uploadedFile = target.files[0];
      const filename = Date.now() + uploadedFile.name;
      const Image = {
        image: uploadedFile,
        preview: URL.createObjectURL(uploadedFile),
        name: filename,
      };
      onChange({ name, value: Image });
      onUpload(filename, uploadedFile);
    }
  };
  const handleRemove = () => {
    onChange({ name, value: {} });
    onRemove(value.name);
  };
  const getSrc = () => {
    if (typeof value !== "object") return value;
    if (value.image) return value.preview;
    if (value._s) return `/api/files?name=${value._s}`;
    return "";
  };

  return (
    <div className="flex flex-col items-center content-center">
      <Image
        fallbackSrc={
          "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        }
        onError={() => {
          console.log("had error");
        }}
        src={getSrc()}
        width={100}
        height={100}
        alt={alt}
        className="!opacity-100"
      />
      <div className="flex flex-row gap-1">
        <input
          type="file"
          name={`img-input${name}`}
          accept="image/*"
          id={`img-input${name}`}
          onChange={handleChange}
        />
        <Button>
          <label htmlFor={`img-input${name}`}>upload image</label>
        </Button>

        <CiSquareRemove onClick={handleRemove} />
      </div>
    </div>
  );
};

export default ImageUploadPerview;
