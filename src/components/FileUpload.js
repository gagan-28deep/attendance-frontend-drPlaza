import React from "react";
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = React.useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    // setFile(e.target.files[0]);
    console.log("File", file);
    const formData = new FormData();
    const fileName = file.name;
    // console.log("fileName", fileName);
    formData.append("name", fileName);
    formData.append("file", file);
    await axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const StyledButton = styled(Button)`
    margin-left: 50rem;
    margin-top: auto;
  `;
  return (
    // Make the div in the center

    <div class="flex justify-center align-middle">
      <div>
        <input
          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          type="file"
          placeholder="Upload your file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      {/* Submit Button */}
      <Button
        onClick={(e) => handleClick(e)}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default FileUpload;
