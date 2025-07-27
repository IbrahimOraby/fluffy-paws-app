import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRef, useState } from "react";
import { useField } from "formik";
import { FilePreview } from "./FilePreview";
import { handleRemoveFile } from "../../services/uploadCare_service";

const MyFileInput = ({ label, ...props }) => {
  const [uploadKey, setUploadKey] = useState(Date.now());
  const uploaderRef = useRef(null);
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleFileUpload = (file) => {
    setValue(file);
  };
  const resetUploader = () => {
    setUploadKey(Date.now());
  };

  const previewFile = field.value;

  return (
    <section className="flex flex-col gap-2 max-w-3xl">
      <label>{label}</label>
      <FileUploaderRegular
        key={uploadKey}
        onFileRemoved={(file) => {
          handleRemoveFile(file, setValue, resetUploader);
        }}
        pubkey={`${import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}`}
        apiRef={uploaderRef}
        onFileUploadSuccess={handleFileUpload}
        multiple={false}
      />
      {/* Preview */}
      {previewFile && (
        <FilePreview
          file={previewFile}
          setValue={setValue}
          resetUploader={resetUploader}
        />
      )}
      <div
        className={`text-error text-sm mt-1 h-5 invisible ${
          meta?.error && `visible`
        }`}
      >
        {meta.error}
      </div>
    </section>
  );
};

export default MyFileInput;
