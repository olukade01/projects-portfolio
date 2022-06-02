import buttonStyle from "../styles/utils.module.css";
const Button = ({ text, black, width, font, size, opacity }) => {
  return (
    <div
      className={`${black ? buttonStyle.black : buttonStyle.white} ${
        width ? buttonStyle.width : "max-w-fit"
      } ${opacity && "opacity-40"} px-6 py-2 rounded-lg mr-4`}
    >
      <p className={`${font && "font-bold"} ${size && "text-2xl"}`}>{text}</p>
    </div>
  );
};

export default Button;
