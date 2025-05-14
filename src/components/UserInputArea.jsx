import UserInput from './UserInput.jsx';

export default function UserInputArea({ handleChange, values }) {
  return (
    <section>
      <form id='user-input'>
        <div className='input-group'>
          <UserInput
            inputName='Initial Investment'
            inputType='number'
            onChange={handleChange}
            value={values.initialInvestment}
          />
          <UserInput
            inputName='Annual Investment'
            inputType='number'
            onChange={handleChange}
            value={values.annualInvestment}
          />
        </div>

        <div className='input-group'>
          <UserInput
            inputName='Expected Return'
            inputType='number'
            onChange={handleChange}
            value={values.expectedReturn}
          />
          <UserInput
            inputName='Duration'
            inputType='number'
            onChange={handleChange}
            value={values.duration}
          />
        </div>
      </form>
    </section>
  );
}
