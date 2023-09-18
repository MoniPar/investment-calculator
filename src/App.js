import React, { useState } from "react";

import Header from "../src/components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import InvestmentTable from "../src/components/InvestmentTable/InvestmentTable";

function App() {
  const [userInvestmentData, setUserInvestmentData] = useState(null);

  const calculateHandler = (investmentData) => {
    setUserInvestmentData(investmentData);
  };

  const yearlyData = []; // per-year results

  if (userInvestmentData) {
    let currentSavings = +userInvestmentData.currentSavings;
    const yearlyContribution = +userInvestmentData.yearlyContribution;
    const expectedReturn = +userInvestmentData.expectedReturn / 100;
    const duration = +userInvestmentData.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <InputForm onCalculateInvestment={calculateHandler} />

      {!userInvestmentData && (
        <p className="fallback">
          Fill in the form above and click 'Calculate' to view your results.
        </p>
      )}
      {userInvestmentData && (
        <InvestmentTable
          data={yearlyData}
          initialInvestment={userInvestmentData.currentSavings}
        />
      )}
    </div>
  );
}

export default App;
