import { Label, CustomInput } from './styles';

interface InputProps {
  name: string;
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
  required?: boolean;
}

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  required = true,
}: InputProps) => {
  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <CustomInput
        id={name}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
