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
    console.log(e.target.files);

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
  const src = typeof value !== "object" ? value : value.preview;
  return (
    <div className="flex flex-col items-center content-center">
      <Image
        fallbackSrc={
          "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        }
        onError={() => {
          console.log("had error");
        }}
        src={src}
        width={300}
        height={300}
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
