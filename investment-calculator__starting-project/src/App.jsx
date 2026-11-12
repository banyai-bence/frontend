import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000000,
    annualInvestment: 200000,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration >= 1;

  function handleChange(inputTarget, inputValue) {
    setUserInput((prevInput) => {
      return {
        ...userInput,
        [inputTarget]: +inputValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />

      {!durationIsValid && (
        <p
          className="center"
          style={{ fontWeight: "bold", color: "red" }}
        >{`Please Enter a Valid (>=1) duration!`}</p>
      )}
      {durationIsValid && <Results datas={userInput} />}
    </>
  );
}

export default App;
