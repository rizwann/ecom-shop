import { cn } from "@/lib/util";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center border shadow-md rounded-full bg-white p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
