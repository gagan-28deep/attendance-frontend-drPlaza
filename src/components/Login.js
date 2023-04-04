import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";

const Login = () => {
  const { user, dispatch, isFetching } = useContext(Context);

  console.log("user", user);
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      setLoading(true);
      let res = await axios.post("http://localhost:5000/api/auth/login", {
        number,
        password,
      });
      console.log("res", res);
      // navigate("/");
      if (res.status === 200) {
        navigate("/checkin");
        alert("Login Successfull");
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      setLoading(false);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        alert("User Not Found");
      } else if (error.message === "Request failed with status code 500") {
        alert("Server Error");
      } else if (error.message === "Request failed with status code 402") {
        alert("Invalid Credentials");
      } else if (error.message === "Request failed with status code 404") {
        alert("Please Fill All Fields");
      }
      dispatch({ type: "LOGIN_FAILURE" });
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Sign in
            </h2>
            <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
              Don't have an account?
              <Link
                to="/signup"
                title=""
                class="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                Create a free account
              </Link>
            </p>
            <form action="#" method="POST" class="mt-8">
              <div class="space-y-5">
                <div>
                  <label
                    for=""
                    class="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Number
                  </label>
                  <div class="mt-2.5">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="number"
                      placeholder="Enter Your Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for=""
                      class="text-base font-medium text-gray-900 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      title=""
                      class="text-sm font-medium text-indigo-600 hover:underline hover:text-indigo-700 focus:text-indigo-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div class="mt-2.5">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                class="mt-5 rounded-md bg-green-600 px-10 py-1.5 text-base font-semibold leading-7 text-white hover:bg-green-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
