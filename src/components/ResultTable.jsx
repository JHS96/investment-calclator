import { formatter } from '../util/investment.js';

export default function ResultTable({ data }) {
  let totalInterest = 0;

  return (
    <section>
      <table id='result'>
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
          {data &&
            data.map((yearData, index) => {
              totalInterest += yearData.interest;
              return (
                <tr key={index + yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>
                    {formatter.format(yearData.valueEndOfYear - totalInterest)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}
