import { InputProps } from "@mui/base";
import { Grid, Input } from "@mui/material";
import { Item } from "@radix-ui/react-navigation-menu";
import { ChangeEvent } from "react";
import * as S from "./FormInput.styled";

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
    <S.FormInput>
      <Grid container spacing={2} rowSpacing={2} alignItems="flex-end">
        <Grid item xs={6}>
          {label && <label className="form-input-label">{label}</label>}
        </Grid>
        <Grid item xs={6}>
          <Input
            className="form-input"
            type={type}
            required={required}
            name={name}
            value={value}
            onChange={changeHandler}
          />
        </Grid>
      </Grid>
    </S.FormInput>
  );
};

export default FormInput;
