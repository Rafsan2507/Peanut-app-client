"use client";
import React, { useState, ChangeEvent } from "react";

type Props = {};

const AddImage = (props: Props) => {
  const [file, setFile] = useState<string | undefined>(undefined);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files.length > 0) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setFile(fileURL);
    }
  }

  return (
    <div>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      {file && <img src={file} alt="Uploaded" />}
    </div>
  );
};

export default AddImage;
