import React, { useState } from "react";

const defaultValues = {
  currentSavings: 5000,
  yearlyContribution: 1800,
  expectedReturn: 1.5,
  duration: 5,
};

const InputForm = (props) => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState(
    defaultValues.currentSavings
  );
  const [enteredYearlyContribution, setEnteredYearlyContribution] = useState(
    defaultValues.yearlyContribution
  );
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState(
    defaultValues.expectedReturn
  );
  const [enteredDuration, setEnteredDuration] = useState(
    defaultValues.duration
  );

  const currentInputHandler = (event) => {
    setEnteredCurrentSavings(event.target.value);
  };
  const yearlyInputHandler = (event) => {
    setEnteredYearlyContribution(event.target.value);
  };
  const returnInputHandler = (event) => {
    setEnteredExpectedReturn(event.target.value);
  };
  const durationInputHandler = (event) => {
    setEnteredDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      currentSavings: +enteredCurrentSavings,
      yearlyContribution: +enteredYearlyContribution,
      expectedReturn: +enteredExpectedReturn,
      duration: +enteredDuration,
    };

    console.log(investmentData);
    props.onCalculateInvestment(investmentData);
  };

  const resetHandler = () => {
    // console.log("Reset button clicked!")
    setEnteredCurrentSavings(defaultValues.currentSavings);
    setEnteredYearlyContribution(defaultValues.yearlyContribution);
    setEnteredExpectedReturn(defaultValues.expectedReturn);
    setEnteredDuration(defaultValues.duration);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSavings}
            onInput={currentInputHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlyContribution}
            onInput={yearlyInputHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredExpectedReturn}
            onInput={returnInputHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredDuration}
            onInput={durationInputHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
