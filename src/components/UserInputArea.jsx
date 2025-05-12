import UserInput from './UserInput.jsx';

export default function UserInputArea() {
  return (
    <form id='user-input'>
      <div className='input-group'>
        <UserInput inputName='Initial Investment' inputType='number' />
        <UserInput inputName='Annual Investment' inputType='number' />
      </div>

      <div className='input-group'>
        <UserInput inputName='Expected Return' inputType='number' />
        <UserInput inputName='Duration' inputType='number' />
      </div>
    </form>
  );
}
