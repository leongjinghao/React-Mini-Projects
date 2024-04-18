import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange}/>
      <Results userInput={userInput} />
    </>
  );
}

export default App;
