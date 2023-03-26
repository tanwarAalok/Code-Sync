import axios from 'axios';
import React, { useCallback } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';

const States = {
    "INPUT": "input",
    "OUTPUT": "output"
}

const CodeRun = ({codeRef}) => {
    const [currentState, setCurrentState] = useState(States.INPUT);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("5");

    
    const runCode = () => {
        toast.success("Running Code");
        var options = {
          method: "POST",
          url: "https://code-compiler.p.rapidapi.com/v2",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "code-compiler.p.rapidapi.com",
            "x-rapidapi-key":
              "0ca192bd34mshca25146e7ea1142p17a87ajsn20830dca802b",
          },
          data: {
            LanguageChoice: language,
            Program: codeRef.current,
            Input: input
          },
        };

        axios
          .request(options)
          .then(function (response) {
              if (response.data.Errors) {
                  setOutput(response.data.Errors);
                  toast.error("Code failed !");
              }
              else {
                  setOutput(response.data.Result);
                  toast.success("Code executed successfully !");
              }
              setCurrentState(States.OUTPUT)
              
          })
          .catch(function (error) {
              console.error(error);
              setOutput(error);
              setCurrentState(States.OUTPUT);
              toast.error("Code failed !");
          });
    }

  return (
    <div className="inputOutputWrap">
      <div className="btnWrap">
        <div>
          <button
            style={{ opacity: currentState === States.INPUT ? "1" : "0.8" }}
            onClick={() => setCurrentState(States.INPUT)}
          >
            Input
          </button>
          <button
            style={{ opacity: currentState === States.OUTPUT ? "1" : "0.8" }}
            onClick={() => setCurrentState(States.OUTPUT)}
          >
            Output
          </button>
        </div>
        <div>
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="5" >Python</option>
                <option value="7" >C++</option>
                <option value="4" >Java</option>
                <option value="17" >JavaScript</option>
            </select>
          <button ref={codeRef} onClick={runCode} >Run</button>
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Enter your input here..."
        readOnly={currentState === States.OUTPUT}
        value={currentState === States.INPUT ? input : output}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    </div>
  );
}

export default CodeRun;