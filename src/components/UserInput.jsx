export default function ({ inputType, inputName, onChange }) {
  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        onChange={(e) => onChange(inputName, Number(e.target.value))}
      />
    </div>
  );
}
