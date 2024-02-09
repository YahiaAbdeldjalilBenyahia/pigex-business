import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../assets/close.png";
import { data } from "autoprefixer";
import axios from "axios";
const Results = ({ message, dataDescription, resultString }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [help, setHelp] = useState([]);

  function interpretJSONString(jsonString) {
    let formattedStringArray = [];
    let currentString = "";

    for (let i = 1; i < jsonString.length - 1; i++) {
      if (!(jsonString[i] === "\\" && jsonString[i + 1] === "n")) {
        if (/\d/.test(jsonString[i]) && jsonString[i + 1] === ".") {
          formattedStringArray.push(currentString);
          currentString = ""; // Reset the current string
        } else {
          currentString += jsonString[i];
        }
      }
    }
    useEffect(() => {
      setHelp(message);
    }, [message]);

    // Push the last remaining string into the array
    if (currentString !== "") {
      formattedStringArray.push(currentString);
    }
    return formattedString;
  }

  const Regenerate = async () => {
    try {
      setIsLoading(true);
      await axios
        .post("http://localhost:5000/chainify", {
          dataDescription: dataDescription,
          data: resultString,
        })
        .then((res) => {
          setIsLoading(false);
          console.log("RES DATA", typeof res.data, res.data);
          setHelp(interpretJSONString(JSON.stringify(res.data)));
        });
    } catch (error) {
      console.error("ERR:,", error);
      alert("There was a problem with the fetch operation:", error);
    }
  };

  const handleClose = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="slide-down mt-20 p-20 bg-opacity-70 backdrop-blur-md fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h1
          className="text-lg leading-relaxed slide-down"
          style={{ lineHeight: "1.3" }}
        >
          {/* {!isLoading && help} */}
          {/* {!isLoading && h} */}
          {!isLoading && (
            <div className="flex flex-col bg-red-400">
              {help.map((item, index) => (
                <h1 key={index}>{item}</h1>
              ))}
            </div>
          )}
        </h1>
        <div className="flex">
          {!isLoading && (
            <>
              <button
                onClick={() => handleClose()}
                className="font-display flex items-center bg-blue-600 hover:scale-105 hover:shadow-gray-400 hover:shadow-lg transition duration-100 ease-in-out text-white px-4 py-1 rounded-lg mx-2"
              >
                <img src={close} className="w-8 h-8" />
                <h1 className="font-regular p-2">Close</h1>
              </button>

              <button
                onClick={() => Regenerate()}
                className="font-display flex items-center text-center bg-gradient-to-r from-green-400 to-blue-700 hover:shadow-xl hover:shadow-green-400 hover:scale-105 transition duration-500 ease-in-out text-white px-4 py-1 rounded-lg mx-2 sm:w-auto"
              >
                <h1 className="font-regular p-2 slide-right slide-right text-center">
                  Regenerate{" "}
                </h1>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
