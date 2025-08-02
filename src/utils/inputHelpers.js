  // Function to check if file is an image
  export const isImage = (file) => {
    return (
      file.contentInfo?.mime?.includes("image/") ||
      ["jpg", "jpeg", "png", "gif", "webp"].some((ext) =>
        file.name?.endsWith(ext)
      )
    );
  };
