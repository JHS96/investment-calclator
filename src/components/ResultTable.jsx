import { formatter } from '../util/investment.js';

export default function ResultTable({ data }) {
  let totalInterest = 0;
  return (
    <section>
      <table id='result'>
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              totalInterest += item.interest;
              return (
                <tr key={index + item.year}>
                  <td>{item.year}</td>
                  <td>{formatter.format(item.valueEndOfYear)}</td>
                  <td>{formatter.format(item.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>
                    {formatter.format(item.valueEndOfYear - totalInterest)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}
