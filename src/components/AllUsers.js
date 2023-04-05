import React from "react";
import axios from "axios";
const AllUsers = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/get-all-users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section class="container px-4 mx-auto py-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-medium text-gray-800 dark:text-white">
            Employees
          </h2>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
            This is a list of all employees. You can add new employees, edit or
            delete existing ones.
          </p>
        </div>
        <div>
          <button class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500">
            Add
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Name</span>
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
                      Role
                    </th>
                  </tr>
                </thead>
                {/* Table Body */}
                {users.map((user) => (
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td class="py-4 px-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10"></div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900 dark:text-white">
                              {user.name}
                            </div>
                            <div class="text-sm text-gray-500 dark:text-gray-300"></div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 dark:text-white">
                          {user.number}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-300"></div>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.role}
                        </span>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"></td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
