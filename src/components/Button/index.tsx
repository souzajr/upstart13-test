import { CustomButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <CustomButton type="submit">{children}</CustomButton>;
};

export default Button;
