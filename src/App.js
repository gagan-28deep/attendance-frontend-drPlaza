import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FileUpload from "./components/FileUpload";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes/routes";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routing />
    </>
  );
}

export default App;
