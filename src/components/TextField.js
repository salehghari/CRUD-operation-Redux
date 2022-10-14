
export default function TextField({lable, inputProps, value, onChange, ariaLable}) {
  return (
    <div className="d-flex flex-column">
      <label className="mb-1">{lable}</label>
      <input
        className="text-field p-2 rounded-1"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
