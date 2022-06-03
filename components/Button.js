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
}) => {
  return (
    <button
      className={`${black ? buttonStyle.black : buttonStyle.white} ${
        width ? buttonStyle.width : "max-w-fit"
      } ${
        opacity && "opacity-40 border-white"
      } hover:cursor-pointer px-6 py-2 rounded-lg mr-4`}
    >
      <div className="flex items-center">
        {logo && <div className="mr-3">{logoo}</div>}
        <p
          className={`${font && "font-bold"} ${
            size && "text-2xl"
          } text-left grow`}
        >
          {text}
        </p>
        {icon && <div className="ml-3">{iconn}</div>}
      </div>
    </button>
  );
};

export default Button;
