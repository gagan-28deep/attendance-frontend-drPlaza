import axios from "axios";
import React, { useEffect } from "react";
import NewEmployyeForm from "./NewEmployyeForm";

const Attendance = () => {
  const [shifts, setShifts] = React.useState([]);
  const [show, setShow] = React.useState(false);
  // Get all shifts
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        "http://localhost:5000/api/auth/get-all-users-login"
      );
      console.log("Res ->", res.data);
      // setShifts(res?.data?.shifts);
      console.log("Shifts ->", shifts);
    }
    fetchData();
  }, []);

  // Handle Click for New Employee
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <section class="container px-4 mx-auto py-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-medium text-gray-800 dark:text-white">
            Employees
          </h2>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
            {/* This is a list of all employees. You can add new employees, edit or
            delete existing ones. */}
          </p>
        </div>
        <div>
          <button
            onClick={handleClick}
            class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500"
          >
            Add
          </button>
        </div>
      </div>
      {/* TO add new Employees */}

      {show && <NewEmployyeForm />}
      {/* Table */}

      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr class="divide-x divide-gray-200">
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Employee Name</span>
                    </th>
                    <th
                      scope="col"
                      class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Role
                    </th>
                    <th scope="col" class="relative py-3.5 px-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                {shifts.map((shift) => (
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr class="divide-x divide-gray-200">
                      <td class="py-4 px-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10"></div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">
                              {shift.name}
                            </div>
                            <div class="text-sm text-gray-500 dark:text-gray-300"></div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 dark:text-white">
                          {shift.number}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-300"></div>
                      </td>
                      {shift.status === "active" ? (
                        <td class="px-4 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {shift.status}
                          </span>
                        </td>
                      ) : (
                        <td class="px-4 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {shift.status}
                          </span>
                        </td>
                      )}
                      <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {shift.role}
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-300 hover:text-indigo-600"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table ends */}
      <div class="flex items-center justify-between mt-6">
        <a
          href="#"
          class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          <span>previous</span>
        </a>
        <div class="items-center hidden md:flex gap-x-3">
          <a
            href="#"
            class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
          >
            1
          </a>
          <a
            href="#"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            3
          </a>
          <a
            href="#"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            ...
          </a>
          <a
            href="#"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            12
          </a>
          <a
            href="#"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            13
          </a>
          <a
            href="#"
            class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            14
          </a>
        </div>
        <a
          href="#"
          class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Attendance;
