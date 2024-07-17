import React, { useEffect } from "react";
import File from "./File";
import FileAttachmentI from "../interfaces/FileAttachmentI";
import { Button } from "@nextui-org/react";

const FilesAttachment = ({
  label = "Attach Files",
  btnTxt = "Upload Files",
  onValidate,
  name,
  Files,
  onAttach,
  onDelete,
}: FileAttachmentI) => {
  return (
    <>
      {label}

      <Button as="label" htmlFor="file-upload">
        Choose File
      </Button>
      <input
        id="file-upload"
        type="file"
        onChange={(e) => {
          onAttach(e.target);
          onValidate && onValidate({ name, value: Files });
        }}
        multiple
      />
      {Files ? (
        <div className="flex flex-row flex-wrap gap-1 m-3 border-spacing-2">
          <React.Fragment>
            <File
              fileName={name}
              onDelete={() => {
                onDelete();
                onValidate && onValidate({ name, value: Files });
              }}
            />
          </React.Fragment>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilesAttachment;
