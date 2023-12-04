"use client";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    "(", ")", "%", "C",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    
  ];

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Calculator</h1>

        <input 
        type="text" 
        placeholder="" 
        className="input w-full bg-white text-black flex justify-items-center "
        value={expression} />
        <input
          type="text"
          className="input w-full bg-white text-black flex justify-items-center"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="btn btn-active btn-primary p-2"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
