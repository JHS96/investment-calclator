export default function ({ inputType, inputName }) {
  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input type={inputType} name={inputName} id={inputName} />
    </div>
  );
}
