"use client";
import React, { useEffect, useState } from "react";
const Card = () => {
  const [city, setCity] = useState([]);
  const [girdetails, setgirldetails] = useState();
  const handleongirlchange = (e) => {
    setgirldetails({ ...girdetails, [e.target.name]: e.target.value });
  };
  const [boydetails, setboydetails] = useState();
  const handleonboychange = (e) => {
    setboydetails({ ...boydetails, [e.target.name]: e.target.value });
  };

  //  fetching the cities
  const fetchCity = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST", // Specify the HTTP method (GET, POST, etc.)
          headers: {
            "Content-Type": "application/json", // Set the content type
          },
          body: JSON.stringify({ country: "india" }), // Pass the country name
        }
      );

      const data = await response.json();
      setCity(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

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
                className="block font-medium text-gray-700 ps-2"
              >
                Boy's Name
              </label>
              <input
                type="text"
                id="boyName"
                name="boyName"
                placeholder="Enter boy's name"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="boyDOB"
                className="block font-medium text-gray-700 ps-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="boyDOB"
                name="boyDOB"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="boyTimeOfBirth"
                className="block font-medium text-gray-700 ps-2"
              >
                Time of Birth
              </label>
              <input
                type="time"
                id="boyTimeOfBirth"
                name="boyTimeOfBirth"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleonboychange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="boyPlaceOfBirth"
                className="block font-medium text-gray-700 ps-2"
              >
                Place of Birth
              </label>
              <div className="datalist-holder">
                <input
                  list="country"
                  name="country"
                  className="datalist-input mt-1 p-2 border rounded-md w-full"
                />
                <datalist id="country">
                  {city.map((cities, indx) => (
                    <option value={cities} key={indx} />
                  ))}
                </datalist>
              </div>
            </div>
          </div>
          <div className="bg-white w-[400px] h-[400px] text-left rounded-lg border-black border-2">
            <h1 className="font-bold text-2xl text-center">Girl's details</h1>
            <div>
              <label
                htmlFor="boyName"
                className="block font-medium text-gray-700 ps-2"
              >
                Girl's Name
              </label>
              <input
                type="text"
                id="boyName"
                name="girlname"
                placeholder="Enter girl's name"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="boyDOB"
                className="block font-medium text-gray-700 ps-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="boyDOB"
                name="girlbirthdate"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="boyTimeOfBirth"
                className="block font-medium text-gray-700 ps-2"
              >
                Time of Birth
              </label>
              <input
                type="time"
                id="boyTimeOfBirth"
                name="girlbirthTime"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleongirlchange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="boyPlaceOfBirth"
                className="block font-medium text-gray-700 ps-2"
              >
                Place of Birth
              </label>
              <div className="datalist-holder">
                <input
                  list="country"
                  name="country"
                  className="datalist-input mt-1 p-2 border rounded-md w-full"
                />
                <datalist id="country">
                  {city.map((cities, indx) => (
                    <option value={cities} key={indx} />
                  ))}
                </datalist>
              </div>
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
