import React from "react";

type FormPreviewLayoutProps = {
  children: React.ReactNode[];
};

const FormPreviewLayout: React.FC<FormPreviewLayoutProps> = ({ children }) => {
  const [form, preview] = children;
  return (
    <div className="flex flex-row gap-4">
      <div className="flex w-1/4 flex-col content-center">{form}</div>
      <div className="flex w-3/4">{preview}</div>
    </div>
  );
};

export default FormPreviewLayout;
