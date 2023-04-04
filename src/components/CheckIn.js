import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";
const CheckIn = () => {
  const { user } = useContext(Context);
  console.log("user", user);
  // const [location, setLocation] = React.useState({
  //   latitude: null,
  //   longitude: null,
  // });
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocation();
    // console.log("location", location);
  }, []);

  useEffect(() => {
    console.log("location", location);
  }, [location]);
  // Function to get location
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      let res = await axios.post("http://localhost:5000/api/auth/check-in", {
        id: user._id,
        location: JSON.stringify(location),
      });
      console.log(res);
    } catch (error) {}
    // alert("You have been marked present!");

    // navigate("/");
  };
  return (
    <div class="flex justify-center">
      <button
        onClick={handleClick}
        class="rounded-md bg-yellow-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-yellow-500"
      >
        Mark Your Attendance
      </button>
    </div>
  );
};

export default CheckIn;
