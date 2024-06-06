import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import TextField from "@mui/material/TextField";
import FieldInterface from "@/utils/interfaces/FieldInterface";
import InputAdornment from "@mui/material/InputAdornment";
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericrInput = ({ field }: { field: FieldInterface }) => {
  const [value, setValue] = React.useState("");
  const { id, label, type } = field;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const saveInput = () => {};

  const getInputProps = () => {
    switch (type) {
      case "amount":
        return {
          inputComponent: AmountFormat as any,
          inputProps: { maxLength: 9 },
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        };
      case "rate":
        return {
          inputProps: { maxLength: 5 },
          endAdornment: <InputAdornment position="start">%</InputAdornment>,
        };
      default:
        return {
          inputProps: { maxLength: 3 },
        };
    }
  };
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={saveInput}
      name="numberformat"
      id={id}
      size="small"
      InputProps={getInputProps()}
      sx={{ width: "100%" }}
      variant="standard"
    />
  );
};
const AmountFormat = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
      />
    );
  }
);
export default NumericrInput;
