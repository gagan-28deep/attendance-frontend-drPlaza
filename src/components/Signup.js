import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RadioGroup, Stack, FormControlLabel, Radio } from "@mui/material";
const Signup = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("employee");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // Handle Change
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        role,
        number,
        password,
      });
      if (res.status === 200) {
        navigate("/login");
        alert("Signup Successfull");
      }
      console.log("res", res);
    } catch (err) {
      if (err.message === "Request failed with status code 404") {
        alert("Please Fill All The Fields");
      }
      console.log(err);
    }
  };
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Sign Up
            </h2>
            <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
              Already have an account?
              <Link
                to="/login"
                class="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                {" "}
                login
              </Link>
            </p>
            <form onSubmit={handleSubmit} action="#" method="POST" class="mt-8">
              <div class="space-y-5">
                <div>
                  <label
                    for="name"
                    class="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Full Name
                  </label>
                  <div class="mt-2.5">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      placeholder="Enter You Full Name"
                      id="name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Number
                  </label>
                  <div class="mt-2.5">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="number"
                      placeholder="Enter Your Number"
                      id="email"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="password"
                    class="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <div class="mt-2.5">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="email"
                      placeholder="Enter Your Password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* Radio button for role : employee and admin */}
                {/* <div>
                  <input class="mx-2" type="radio" name="role" value={role} />
                  <label for="employee">Employee</label>
                  <input class="mx-2" type="radio" name="role" value="admin" />
                  <label for="admin">Admin</label>
                </div> */}
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={role}
                  onChange={handleChange}
                >
                  <Stack direction={"row"}>
                    <FormControlLabel
                      value="employee"
                      control={<Radio color="secondary" />}
                      label="Employee"
                    />
                    <FormControlLabel
                      value="admin"
                      control={<Radio color="secondary" />}
                      label="Admin"
                    />
                  </Stack>
                </RadioGroup>
              </div>
            </form>
            <button
              onClick={handleSubmit}
              class="rounded-md bg-green-600 px-10 py-3 text-base font-semibold leading-7 text-white hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
