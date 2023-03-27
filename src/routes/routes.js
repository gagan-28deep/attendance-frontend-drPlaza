import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Attendance from "../components/Attendance";
const FileUpload = React.lazy(() => import("../components/FileUpload"));

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/uploads"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <FileUpload />
          </Suspense>
        }
      />
      <Route
        path="attendance"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Attendance />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
