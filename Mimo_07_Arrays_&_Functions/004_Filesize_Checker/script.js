let checkSize = (fileSize) => {
    const maxSize = 5;
    const minSize = 1;
    console.log("Upload Permitted?");
    const overMaxSize = fileSize > maxSize;
    console.log("The file is too large: " + overMaxSize);
    const underMinSize = fileSize < minSize;
    console.log("The file is too small: " + underMinSize);
  };
  