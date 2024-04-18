import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            userInput.initialInvestment -
            result.annualInvestment * result.year;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <th>{result.year}</th>
              <th>{formatter.format(result.valueEndOfYear)}</th>
              <th>{formatter.format(result.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
