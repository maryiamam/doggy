import { InputProps } from "@mui/base";
import { ChangeEvent } from "react";
import "./FormInput.scss";

interface Props {
  label: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  value,
  required,
  type,
  name,
  changeHandler,
}: Props & InputProps) => {
  return (
    <div className="form-input-container">
      {label && <label className="form-input-label">{label}</label>}
      <input
        className="form-input"
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default FormInput;
