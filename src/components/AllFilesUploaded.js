import React, { useContext } from "react";
import { Context } from "../context/AuthContext";
import axios from "axios";
const AllFilesUploaded = () => {
  const [file, setFile] = React.useState([]);
  const { user } = useContext(Context);

  console.log("user", user.role);
  React.useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("http://localhost:5000/pics");
        console.log("res", res);
        setFile(res.data.result);
        console.log("file", file);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    //   setFile(res.data);
  }, []);
  return (
    <div>
      All Files Uploaded
      {user.role === "admin" ? (
        <div>
          {file.map((item) => {
            console.log("item", item);
            return (
              <div>
                <img src={item.path} alt="file" />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>Not Admin</h1>
        </div>
      )}
    </div>
  );
};

export default AllFilesUploaded;
