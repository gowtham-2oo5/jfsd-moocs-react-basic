import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = (operator) => {
    const inputValue = parseFloat(input);
    if (isNaN(inputValue)) return;
    switch (operator) {
      case "add":
        setResult(result + inputValue);
        break;
      case "subtract":
        setResult(result - inputValue);
        break;
      case "multiply":
        setResult(result * inputValue);
        break;
      case "divide":
        setResult(result / inputValue);
        break;
      default:
        break;
    }
    setInput(""); // Clear input after each operation
  };

  const resetInput = () => {
    setInput("");
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simplest Working Calculator</h1>
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>{result}</div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        style={{ padding: "10px", fontSize: "18px", marginBottom: "10px", width: "100px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleOperation("add")} style={buttonStyle}>add</button>
        <button onClick={() => handleOperation("subtract")} style={buttonStyle}>subtract</button>
        <button onClick={() => handleOperation("multiply")} style={buttonStyle}>multiply</button>
        <button onClick={() => handleOperation("divide")} style={buttonStyle}>divide</button>
        <button onClick={resetInput} style={{ ...buttonStyle, backgroundColor: "#FF6347" }}>reset input</button>
        <button onClick={resetResult} style={{ ...buttonStyle, backgroundColor: "#FF6347" }}>reset result</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px",
  fontSize: "16px",
  margin: "5px",
  cursor: "pointer",
  border: "1px solid #ccc",
  backgroundColor: "#f0f0f0"
};

export default App;
