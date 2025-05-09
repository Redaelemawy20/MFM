import React from 'react';

type FormPreviewLayoutProps = {
  children: React.ReactNode[];
};

const FormPreviewLayout: React.FC<FormPreviewLayoutProps> = ({ children }) => {
  const [form, preview] = children;

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 h-full overflow-hidden">
      {/* Form panel - fixed width with scrolling */}
      <div className="lg:w-1/4 w-full flex-shrink-0 overflow-auto border rounded-lg bg-white shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium text-gray-800">Edit Form</h3>
        </div>
        <div className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {form}
        </div>
      </div>

      {/* Preview panel - with overflow handling */}
      <div className="lg:w-3/4 w-full flex-grow overflow-hidden border rounded-lg bg-white shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium text-gray-800">Preview</h3>
        </div>
        <div className="p-6 overflow-auto max-h-[calc(100vh-200px)]">
          {preview}
        </div>
      </div>
    </div>
  );
};

export default FormPreviewLayout;
