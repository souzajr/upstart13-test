import { Label, CustomInput } from './styles';

interface InputProps {
  name: string;
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'number';
}

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  required = true,
  type = 'text',
}: InputProps) => {
  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <CustomInput
        id={name}
        type={type}
        min={1}
        max={7}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
