import { Button } from "@mui/material";

interface IButtonProps {
  link: string;
  title: string;
}

export const ButtonLink = ({ link, title }: IButtonProps) => {
  const ButtonStyle = {
    marginTop: "2vw",
  };

  return (
    <Button variant="contained" href={link} style={ButtonStyle}>
      {title}
    </Button>
  );
};
