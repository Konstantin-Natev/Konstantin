import styles from "./custom-button.module.css";
import Typography from "@mui/material/Typography";

const variants = {
  filled: {
    root: styles.rootFilled,
    text: styles.textFilled
  },
  outlined: {
    root: styles.rootOutlined,
    text: styles.textOutlined
  },
  text: {
    root: styles.root,
    text: styles.text
  },
  delete: {
    root: styles.rootOutlinedDelete,
    text: styles.textOutlinedDelete
  }
};

interface ICustomButton {
  text: string;
  variant: "filled" | "outlined" | "text" | "delete";
  onClick?: () => void;
  icon?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const CustomButton = ({
  text,
  variant,
  onClick,
  icon,
  className,
  disabled,
  type,
}: ICustomButton) => {
  return (
    <button
      className={`${variants[variant].root} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <img src={icon} alt={text} />}
      <Typography className={variants[variant].text}>{text}</Typography>
    </button>
  );
};
