import Header from '../src/components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import InvestmentTable from '../src/components/InvestmentTable/InvestmentTable';

function App() {
  const calculateHandler = (investmentData) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +investmentData.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +investmentData.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +investmentData.expectedReturn / 100;
    const duration = +investmentData.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <InputForm onCalculateInvestment={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentTable />
    </div>
  );
}

export default App;
