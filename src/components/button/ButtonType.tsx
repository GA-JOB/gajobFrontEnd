import { Button } from "@mui/material";

interface IButtonProps {
  variants?: string;
  link?: string;
  title: string;
  widthStyle?: string;
  paddingStyle?: string;
  buttonColor?: string;
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
  disabled,
  onClick,
}: IButtonProps) => {
  const ButtonStyle = {
    marginTop: "2vw",
    padding: paddingStyle,
    width: widthStyle,
    backgroundColor: buttonColor,
  };

  return (
    <Button
      disabled={disabled && disabled}
      variant={variants ? "text" : "contained"}
      href={link && link}
      type="submit"
      style={ButtonStyle}
      onClick={onClick || undefined}
    >
      {title}
    </Button>
  );
};
