import { Button } from "@mui/material";

interface IButtonProps {
  title: string;
  widthStyle: string;
}

export const SubmitButton = ({ title, widthStyle }: IButtonProps) => {
  const ButtonStyle = {
    marginTop: "2vw",
    width: widthStyle,
  };

  return (
    <Button variant="contained" type="submit" style={ButtonStyle}>
      {title}
    </Button>
  );
};
