import { useEffect, useState } from "react";
import axios from "axios";
import search from "../assets/search.png";
import Loading from "./Loading";
import Results from "./Results";

import right from "../assets/greater.png";

import backgroundImage from "../assets/backgrounds/8.jpg";

const Analyzer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [hiddenColumns, setHiddenColumns] = useState(false);

  const [max, setMax] = useState(4);

  const handleFileChange = (event) => {
    setSelectedFile(null);
    setFileData(null);
    const file = event.target.files[0];

    // Ensure only CSV files are accepted
    if (!file || file.type !== "text/csv") {
      alert("Please select a CSV file.");
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const data = content.split("\n").map((row) => row.split(","));
      setFileData(data);
    };

    reader.readAsText(file);
  };
  const [dataDescription, setDataDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [questions, setQuestions] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [resultString, setResultString] = useState("");
  const handleSubmit = async () => {
    setDescriptionError(false);
    if (dataDescription.length < 100) {
      setDescriptionError(true);
      return;
    }
    try {
      for (let i = 0; i < fileData.length; i++) {
        // Concatenate the strings in each row with a newline character
        const newString = resultString + fileData[i].join(" ") + "\n";
        setResultString(newString);
      }
      await axios
        .post("http://localhost:5000/chainify", {
          dataDescription: dataDescription,
          data: resultString,
        })
        .then((res) => {
          setIsLoading(false);
          console.log("RES DATA", typeof res.data, res.data);
          setQuestions(JSON.stringify(res.data));
          console.log("Questions: ", typeof questions, questions);
          setShowResults(true);
        });
    } catch (error) {
      console.error("ERR:,", error);
      setShowResults(false);
      // alert("There was a problem with the fetch operation:", error);
    }
  };
  function formatText(inputText) {
    // Remove quotation marks
    let formattedText = inputText.replace(/"/g, "");

    // Replace "\n" with new line breaks
    formattedText = formattedText.replace(/\\n/g, "\n");

    return formattedText;
  }
  const [isBelowThreshold, setIsBelowThreshold] = useState(false);
  const [step, setStep] = useState(0);
  const [limitLeft, setLimitLeft] = useState(0);
  useEffect(() => {
    function handleResize() {
      setIsBelowThreshold(window.innerWidth < 768);
      if (isBelowThreshold) {
        setStep(3);
      } else {
        setStep(8);
      }
      console.log(isBelowThreshold);
    }
    if (fileData) setMax(fileData[0].length);

    handleResize();

    window.addEventListener("resize", handleResize);
    if (fileData && fileData.length > 0 && fileData[0].length > max) {
      setHiddenColumns(true);
    } else {
      setHiddenColumns(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fileData, window.innerWidth]);

  return (
    <div
      className={`slide-down font-display relative w-screen h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isLoading && <Loading />}
      {!isLoading && showResults && (
        <Results
          dataDescription={dataDescription}
          resultString={resultString}
          message={formatText(questions)}
        />
      )}
      <div className="bg-zinc-950  bg-opacity-60 font-display z-50 h-screen w-screen flex items-center justify-center">
        <div className="">
          <div className="mb-2">
            <label
              htmlFor="datasetDescription"
              className="block text-sm font-medium text-white mb-1"
            >
              Dataset Description
            </label>
            <input
              type="text"
              id="datasetDescription"
              name="datasetDescription"
              onChange={(e) => {
                setDescriptionError(e.target.value.length < 50);
                setDataDescription(e.target.value);
              }}
              className={`focus:outline-none appearance-none bg-transparent ${
                descriptionError
                  ? "border-red-700 border-2 rounded-full"
                  : "border-b-2 border-white  focus:border-blue-500"
              }border-b-2 border-gray-300 w-full py-2 px-4 text-white leading-tight  placeholder-gray-500 placeholder-opacity-50`}
            />
            <h1 className="text-red-600 text-sm font-semibold italic">
              {descriptionError &&
                "Description must be at least 50 characters long!"}
            </h1>
          </div>

          <div className="mb-6">
            <label
              htmlFor="upload-file"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:rounded-xl hover:scale-105 transition ease-in-out shadow-md file-input-label inline-flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              Upload CSV
            </label>
            <input
              type="file"
              id="upload-file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
            {selectedFile && (
              <p className="mt-4 block text-sm font-medium text-white mb-1">
                Selected file: {selectedFile.name}
              </p>
            )}
          </div>

          {fileData && (
            <>
              <div className="xs:text-xl mb-4 space-y-4 flex flex-col items-start md:flex-row md:items-center">
                <label
                  htmlFor="datasetDescription"
                  className="block text-sm font-medium text-white mb-1 md:mb-0 md:mr-6"
                >
                  Data Overview
                </label>
                <div className="flex justify-center space-x-14">
                  {step < fileData[0].length && (
                    <>
                      <button
                        onClick={() => {
                          if (limitLeft - step >= 0)
                            setLimitLeft(limitLeft - step);
                          else setLimitLeft(0);

                          console.log("LIMIT LEFT:", limitLeft);
                        }}
                        className="rotate-180 text-white text-xl"
                      >
                        <img src={right} className="w-8 h-8" alt="Arrow" />
                      </button>
                      <button
                        onClick={() => {
                          console.log("comparing ", limitLeft + step, max);
                          if (limitLeft + step <= max)
                            setLimitLeft(limitLeft + step);
                          else setLimitLeft(max - step);
                          console.log("LIMIT LEFT:", limitLeft);
                        }}
                        className="text-white text-xl"
                      >
                        <img
                          src={right}
                          className="rotate-0 w-8 h-8"
                          alt="Arrow"
                        />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="table-container overflow-x-auto max-w-full">
                <table className="table-auto overflow-hidden rounded-lg shadow-md">
                  <tbody className="bg-gray-800 text-white">
                    {fileData.slice(0, 5).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row
                          .slice(
                            limitLeft,
                            limitLeft + step < max ? limitLeft + step : max
                          )
                          .map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-4 py-2">
                              {cell}
                            </td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => {
                  if (!descriptionError) {
                    setIsLoading(true);
                    handleSubmit();
                  } else {
                    alert("You must provide a description for the dataset!");
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 flex justify-around space-x-4 hover:scale-105 hover:rounded-xl mt-4 text-white font-bold py-2 px-4 rounded-lg hover:border-transparent transition-all duration-300 ease-in-out hover:shadow-md"
              >
                <img src={search} />
                <h1>Analyse Data</h1>
              </button>
            </>
          )}

          {questions.length > 0 && (
            <div className="mt-4">
              {questions.split("\n").map((question, index) => (
                <div className="mb-4" key={index}>
                  <h1 className="text-white text-xl font-bold">
                    {question.question}
                  </h1>
                  <p className="text-white text-sm">{question.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
