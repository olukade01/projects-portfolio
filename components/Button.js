import buttonStyle from "../styles/utils.module.css";
const Button = ({
  logo,
  logoo,
  icon,
  iconn,
  text,
  black,
  width,
  font,
  size,
  opacity,
  sm,
  sfont,
  neutral,
  bg,
  message,
}) => {
  return (
    <button
      className={`${
        black
          ? "bg-black dark:bg-[#E5E7EB] text-white dark:text-black mr-0"
          : neutral
          ? "bg-[#f5f5f5] dark:bg-transparent dark:border dark:border-[#4F4F4F] py-[8px]"
          : "bg-transparent border border-gray-200 text-[#000] dark:text-white"
      } ${width ? buttonStyle.width : ""} ${
        opacity &&
        "bg-gray-200 dark:bg-[#1F2937] opacity-50 border border-[#fff]"
      } ${
        bg && "dark:border-[#4F4F4F]"
      } hover:cursor-pointer px-6 py-3 rounded-lg flex gap-4 `}
    >
      <div className="flex items-center">
        {logo && <div className="mr-3">{logoo}</div>}
        <p
          className={`${font && "font-bold"} ${size && "text-2xl"} ${
            sm && "text-xs"
          } ${sfont && "font-medium"} text-left grow`}
        >
          {text}
        </p>
        {icon && <div className="ml-3">{iconn}</div>}
      </div>
    </button>
  );
};

export default Button;
