import type { ReactElement } from "react";

export interface ButtonProps {
  varient: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}

const varientStyles = {
  // Primary: Solid background with hover lift
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
  // Secondary: Bordered look for a cleaner feel
  secondary: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100"
};

const defaultStyles = "cursor-pointer rounded-lg px-5 py-2 transition-all duration-200 active:scale-95 font-medium flex items-center gap-2";

const Button = (props: ButtonProps) => {
  return (
    <button 
      onClick={props.onClick} 
      className={`${varientStyles[props.varient]} ${defaultStyles}`}
    >
      {props.startIcon}
      {props.text}
    </button>
  );
};

export default Button;