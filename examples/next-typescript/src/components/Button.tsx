import classNames from "classnames";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  onButtonClick?: () => void;
  isActive: boolean;
  className?: string;
}

export const Button = ({
  text,
  onButtonClick: onClick,
  isActive,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        isActive ? "bg-blue-600" : "bg-blue-400",
        "relative text-white rounded-xl px-4 py-2 font-medium hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};
