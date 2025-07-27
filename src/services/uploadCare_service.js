import {
    deleteFile,
    UploadcareSimpleAuthSchema,
  } from "@uploadcare/rest-client";
  
  //* Function to remove file
 export  const handleRemoveFile = async (fileToRemove,setValue,resetUploader) => {
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
      setValue(null);
      resetUploader();
    } catch (error) {
      console.error("Error removing file:", error);
    }
  };
