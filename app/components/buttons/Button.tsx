import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  icon?: IconType;
  width?: string;
  py?: string;
  bg?: string;
  border?: string;
  large?: boolean;
}

const Button: React.FC<ButtonProps> = function ({ label, icon: Icon, large }) {
  return (
    <button
      className={` text-white text-sm
        relative px-2 rounded-sm cursor-pointer
         bg-primaryYellow py-2 items-center flex gap-2 w-full
        ${Icon && "justify-center"}
        ${large ? "w-full" : "w-[200px]"}
        xs:w-[225px]
        max-w-[275px]

    `}
    >
      {Icon && <Icon color="white" size={22} />}
      {label}
    </button>
  );
};

export default Button;
