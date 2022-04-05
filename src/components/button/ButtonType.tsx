import { Button } from "@mui/material";

interface IButtonProps {
  link?: string;
  title: string;
  widthStyle?: string;
}

export const ButtonType = ({ link, title, widthStyle }: IButtonProps) => {
  const ButtonStyle = {
    marginTop: "2vw",
    width: widthStyle,
  };

  return (
    <Button
      variant="contained"
      href={link && link}
      type="submit"
      style={ButtonStyle}
    >
      {title}
    </Button>
  );
};
