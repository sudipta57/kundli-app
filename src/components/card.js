"use client";
import React, { useState } from "react";
const Card = () => {
  const [girdetails, setgirldetails] = useState();
  const handleongirlchange = (e) => {
    setgirldetails({ ...girdetails, [e.target.name]: e.target.value });
  };
  const [boydetails, setboydetails] = useState();
  const handleonboychange = (e) => {
    setboydetails({ ...boydetails, [e.target.name]: e.target.value });
  };
  fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return (
    <>
      <div className="max-w-[1000px] bg-pink-100 h-[600px] m-auto  rounded-lg shadow-2xl text-center">
        <h2 className="text-4xl font-bold pt-2 underline">Match Making</h2>
        <div className="flex justify-between  px-0 md:px-20 py-10">
          <div className="bg-white w-[400px] h-[400px] text-left rounded-lg border-black border-2">
            <h1 className="font-bold text-2xl text-center ">Boys's details</h1>
            <div>
              <label
                htmlFor="boyName"
                class="block font-medium text-gray-700 ps-2"
              >
                Boy's Name
              </label>
              <input
                type="text"
                id="boyName"
                name="boyName"
                placeholder="Enter boy's name"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="boyDOB"
                class="block font-medium text-gray-700 ps-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="boyDOB"
                name="boyDOB"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="boyTimeOfBirth"
                class="block font-medium text-gray-700 ps-2"
              >
                Time of Birth
              </label>
              <input
                type="time"
                id="boyTimeOfBirth"
                name="boyTimeOfBirth"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="boyPlaceOfBirth"
                class="block font-medium text-gray-700 ps-2"
              >
                Place of Birth
              </label>
              <input
                type="text"
                id="boyPlaceOfBirth"
                name="boyPlaceOfBirth"
                placeholder="Enter place of birth"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>
          </div>
          <div className="bg-white w-[400px] h-[400px] text-left rounded-lg border-black border-2">
            <h1 className="font-bold text-2xl text-center">Girl's details</h1>
            <div>
              <label
                htmlFor="boyName"
                class="block font-medium text-gray-700 ps-2"
              >
                Girl's Name
              </label>
              <input
                type="text"
                id="boyName"
                name="girlname"
                placeholder="Enter girl's name"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="boyDOB"
                class="block font-medium text-gray-700 ps-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="boyDOB"
                name="girlbirthdate"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="boyTimeOfBirth"
                class="block font-medium text-gray-700 ps-2"
              >
                Time of Birth
              </label>
              <input
                type="time"
                id="boyTimeOfBirth"
                name="girlbirthTime"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>

            <div class="mt-4">
              <label
                htmlFor="boyPlaceOfBirth"
                class="block font-medium text-gray-700 ps-2"
              >
                Place of Birth
              </label>
              <input
                type="text"
                id="boyPlaceOfBirth"
                name="girlbirthplace"
                placeholder="Enter place of birth"
                class="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>
          </div>
        </div>
        <button className="bg-purple-600 text-white p-3 rounded-md">
          Match kundi
        </button>
      </div>
    </>
  );
};

export default Card;
