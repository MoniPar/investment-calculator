import styles from './InvestmentTable.module.css';

const formatter = new Intl.NumberFormat("en-EU", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const InvestmentTable = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((dataPerYear) => (
          <tr key={dataPerYear.year}>
            {/* YEAR NUMBER */}
            <td>{dataPerYear.year}</td>
            {/* TOTAL SAVINGS END OF YEAR */}
            <td>{formatter.format(dataPerYear.savingsEndOfYear)}</td>
            {/* INTEREST GAINED IN YEAR */}
            <td>{formatter.format(dataPerYear.yearlyInterest)}</td>
            {/* TOTAL INTEREST GAINED */}
            <td>
              {formatter.format(dataPerYear.savingsEndOfYear -
                props.initialInvestment -
                dataPerYear.yearlyContribution * dataPerYear.year)}
            </td>
            {/* TOTAL INVESTED CAPITAL */}
            <td>
              {formatter.format(props.initialInvestment +
                dataPerYear.yearlyContribution * dataPerYear.year)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
