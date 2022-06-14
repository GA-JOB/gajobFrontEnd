import { Button } from "@mui/material";

interface IButtonProps {
  variants?: string;
  link?: string;
  title: string;
  widthStyle?: string;
  paddingStyle?: string;
  buttonColor?: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonType = ({
  variants,
  link,
  title,
  widthStyle,
  paddingStyle,
  buttonColor,
  color,
  disabled,
  onClick,
}: IButtonProps) => {
  const ButtonStyle = {
    padding: paddingStyle,
    width: widthStyle,
    backgroundColor: buttonColor,
    color: color,
  };

  return (
    <Button
      disabled={disabled && disabled}
      variant={variants ? "text" : "contained"}
      href={link && link}
      type="submit"
      style={ButtonStyle}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
