import { StaticFileIcon, StaticXIcon } from "../Icons/StaticIcons";
import { isImage } from "../../utils/inputHelpers";
import { handleRemoveFile } from "../../services/uploadCare_service";
export const FilePreview = ({ file, setValue, resetUploader }) => {



  return (
    <>
     
        <div className="flex flex-wrap gap-4 mt-2">
          <div
            key={file.uuid}
            className="w-[15rem] border border-gray-200 rounded-lg overflow-hidden shadow-sm relative"
          >
            <button
              type="button"
              onClick={() => handleRemoveFile(file, setValue, resetUploader)}
              className="cursor-pointer absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Remove file"
            >
              <StaticXIcon />
            </button>

            {isImage(file) ? (
              <img
                src={file.cdnUrl}
                alt="Preview"
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="p-4 flex flex-col items-center">
                <StaticFileIcon size={"100"} color="gray" />
                <div className="w-full text-center">
                  <p className="font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                
                </div>
              </div>
            )}

            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 truncate">{file.name}</p>
            </div>
          </div>
        </div>
      
    </>
  );
};
