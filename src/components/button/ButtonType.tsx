import { Button } from "@mui/material";

interface IButtonProps {
  link?: string;
  title: string;
  widthStyle?: string;
  paddingStyle?: string;
  buttonColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonType = ({
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
      variant="contained"
      href={link && link}
      type="button"
      style={ButtonStyle}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
