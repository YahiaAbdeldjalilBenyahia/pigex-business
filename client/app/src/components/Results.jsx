import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../assets/close.png";
import { data } from "autoprefixer";
import { api } from "../../utils/api";
const Results = ({ message, dataDescription, resultString }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [help, setHelp] = useState([]); 
  useEffect(()=>console.log(message),[]);
  const interpretJSONString = (str) => {
    setHelp([""]);
    let s = str;
    const segments = str
      .slice(1, -1)
      .split('\\n');
      console.log(segments.length,segments);
    
    setHelp(segments);
  };

  useEffect(() => {
    // interpretJSONString(JSON.stringify(message));
    setHelp(message.split('\n'));
  }, [message]); 
  const Regenerate = async () => {
    try {
      setIsLoading(true);
      await api
        .post("/chainify", {
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
    <div className="slide-down mt-16 px-20 bg-opacity-70 backdrop-blur-md fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h1
          className="text-sm leading-relaxed slide-down"
          style={{ lineHeight: "1" }}
        > 
          {!isLoading && (
            <ul className="flex flex-col space-y-2">
              {help && help.map((item, index) => <li key={index} className="">{item}</li>)}
            </ul>
          )}
          {isLoading && (
            <div className="flex items-center justify-center mb-4">
              <div className="border-t-8 border-b-2 border-white border-solid rounded-full animate-spin w-20 h-20"></div>
            </div>
          )}
        </h1>
        <div className="flex mt-1 items-center justify-around w-full">
          <button
            onClick={() => Regenerate()}
            className="font-display flex items-center text-center bg-gradient-to-r from-green-400 to-blue-700 hover:shadow-xl hover:shadow-green-400 hover:scale-105 transition duration-500 ease-in-out text-white px-4 py-1 rounded-lg mx-2 sm:w-auto"
          >
            <h1 className="font-regular p-2 slide-right slide-right text-center">
              Regenerate{" "}
            </h1>
          </button>
          <button
            onClick={() => handleClose()}
            className="xxs:text-sm font-display flex items-center justify-center bg-blue-600 hover:scale-105 hover:shadow-gray-400 hover:shadow-lg transition duration-100 ease-in-out text-white px-4 py-1 rounded-lg mx-2"
          >
            <img src={close} className="xxs:w-4 xxs:h-4 w-8 h-8" />
            <h1 className="font-regular p-2">Close</h1>
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Results;
