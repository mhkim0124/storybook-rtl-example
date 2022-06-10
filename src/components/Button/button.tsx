import type { FC } from "react";
import type { SxProps } from "@mui/system";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  sx?: SxProps;
  text: string;
  variant: "contained" | "outlined" | "text" | undefined;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  sx,
  text,
  variant,
  isDisabled = false,
  onClick,
}) => {
  return (
    <MuiButton
      variant={variant}
      disabled={isDisabled}
      sx={{
        width: "152px",
        height: "48px",
        padding: "12px",
        backgroundColor: "#326edc",
        borderRadius: "2px",
        color: "#fff",
        ...sx,
      }}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
