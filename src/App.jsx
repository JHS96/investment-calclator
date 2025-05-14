import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInputArea from './components/UserInputArea.jsx';
import ResultTable from './components/ResultTable.jsx';

import { calculateInvestmentResults } from './util/investment.js';

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const values = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };

  const data = calculateInvestmentResults(values);

  function handleChange(inputName, value) {
    if (inputName === 'Initial Investment') {
      setInitialInvestment(value);
    } else if (inputName === 'Annual Investment') {
      setAnnualInvestment(value);
    } else if (inputName === 'Expected Return') {
      setExpectedReturn(value);
    } else if (inputName === 'Duration') {
      setDuration(value);
    }
  }

  return (
    <>
      <Header />
      <main>
        <UserInputArea handleChange={handleChange} values={values} />
        {duration <= 0 && (
          <p className='center'>Please enter a duration greater than zero.</p>
        )}
        {duration > 0 && <ResultTable data={data} />}
      </main>
    </>
  );
}

export default App;
