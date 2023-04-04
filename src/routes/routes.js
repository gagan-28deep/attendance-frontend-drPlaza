import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Attendance from "../components/Attendance";
import Signup from "../components/Signup";
import Login from "../components/Login";
import CheckIn from "../components/CheckIn";
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
      <Route
        path="signup"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="checkin"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CheckIn />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
