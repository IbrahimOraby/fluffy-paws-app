import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRef, useState } from "react";
import { StaticFileIcon, StaticXIcon } from "../Icons/StaticIcons";
import {
  deleteFile,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";
import { isImage } from "../../utils/inputHelpers";

const MyFileInput = ({ label }) => {
  const [files, setFiles] = useState([]);
  const uploaderRef = useRef(null);

  const handleFileUpload = (file) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  // Function to remove file
  const handleRemoveFile = async (fileToRemove) => {
    try {
      const authSchema = new UploadcareSimpleAuthSchema({
        publicKey: import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY,
        secretKey: import.meta.env.VITE_UPLOADCARE_SECRET_KEY,
      });

      await deleteFile(
        { uuid: fileToRemove.uuid },
        {
          authSchema,
        }
      );
      setFiles((prevFiles) =>
        prevFiles.filter((file) => file.uuid !== fileToRemove.uuid)
      );
    } catch (error) {
      console.error("Error removing file:", error);
    }
  };


  return (
    <section className="flex flex-col gap-2 max-w-3xl">
      <label>{label}</label>
      <FileUploaderRegular
      key={files.length}
        pubkey={`${import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}`}
        apiRef={uploaderRef}
        onFileUploadSuccess={handleFileUpload}
        options={{
          showRecentUploads: false,
        }}
      />

      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {files.map((file) => (
          <div
            key={file.uuid}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm relative"
          >
            {/* Close button */}
            <button
              onClick={() => handleRemoveFile(file)}
              className=" cursor-pointer absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Remove file"
            >
              <StaticXIcon />
            </button>

            {isImage(file) ? (
              <div className="relative">
                <img
                  src={file.cdnUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover"
                />
              </div>
            ) : (
              <div className="p-4 flex flex-col items-center">
                {/* Document icon */}
                <StaticFileIcon size={"100"} color="gray" />

                {/* File info */}
                <div className="w-full text-center">
                  <p className="font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                  <a
                    href={file.cdnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}

            {/* Common footer for all files */}
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 truncate">{file.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyFileInput;
