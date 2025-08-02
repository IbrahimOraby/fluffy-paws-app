import React, { useRef, useState } from "react";
import { useField } from "formik";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { handleRemoveFile } from "../../services/uploadCare_service";
// import { MultiFilePreview } from "./MultiFilePreview"; 

const MyMultiFileInput = ({ label, ...props }) => {
  const [uploadKey, setUploadKey] = useState(Date.now());
  const uploaderRef = useRef(null);
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const files = field.value || [];

  const handleFileUpload = (uploadedFile) => {
    const newFile = {
      uuid: uploadedFile.uuid,
      cdnUrl: uploadedFile.cdnUrl,
      name: uploadedFile.name,
      mimeType: uploadedFile.mimeType,
      size: uploadedFile.size,
    };
    setValue([...files, newFile]);
  };

  const handleRemove = (fileToRemove) => {
    const newFiles = files.filter((file) => file.uuid !== fileToRemove.uuid);
    setValue(newFiles);
  };

  const resetUploader = () => {
    setUploadKey(Date.now());
  };

  return (
    <section className="flex flex-col gap-2 max-w-3xl">
      <label>{label}</label>
      <FileUploaderRegular
        key={uploadKey}
        onFileRemoved={(file) => {
          handleRemoveFile(file, handleRemove, resetUploader);
        }}
        pubkey={`${import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}`}
        apiRef={uploaderRef}
        onFileUploadSuccess={handleFileUpload}
        multiple={true} 
      />
      
      {files.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {files.map((file) => (
            <MultiFilePreview
              key={file.uuid}
              file={file}
              onRemove={() => handleRemove(file)}
            />
          ))}
        </div>
      )}
      <div
        className={`text-error text-sm mt-1 h-5 invisible ${
          meta?.error && meta?.touched && `visible`
        }`}
      >
        {meta.error}
      </div>
    </section>
  );
};

export default MyMultiFileInput;