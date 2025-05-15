'use client';
import React from 'react';
import ImageUploadPerviewI, {
  ImageValue,
} from './interfaces/ImageUploadPerviewI';
import { Button, Image } from '@nextui-org/react';
import { CiSquareRemove } from 'react-icons/ci';
import { useFormContext } from '../forms/context/FormContext';
import { TranslatableValue } from './interfaces/InputI';
function ImageUploadPerview<Tr extends boolean>({
  onChange,
  name,
  value,
  fileKey,
  alt,
  btnText = 'Upload Image',
  translatable,
}: ImageUploadPerviewI<Tr>) {
  const { lang, handleChangeUpdated, handleFileUpload, handleFileRemove } =
    useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if (target.files && target.files.length > 0) {
      const uploadedFile = target.files[0];
      let translatedFilename = translatable ? fileKey + lang : fileKey;

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

    handleFileRemove(fileKey);
  };
  const getSrc = () => {
    let obj;
    if (translatable && typeof value === 'object') {
      let objVal = value as TranslatableValue<ImageValue>;
      obj = objVal[lang];
    } else {
      obj = value ?? {};
    }
    if ('image' in obj) return obj.preview;

    if ('_s' in obj) return `/api/files?name=${obj._s}`;
    return '';
  };

  return (
    <div className="flex flex-col items-center content-center mb-2">
      <Image
        fallbackSrc={
          'https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
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
}

export default ImageUploadPerview;
