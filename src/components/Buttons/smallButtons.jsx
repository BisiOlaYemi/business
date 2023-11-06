/* eslint-disable react/no-unescaped-entities */
export default function SmallButton(props) {
  const { name, bgColor, textColor, action, borderColor } = props;
  return (
    <button
      type="submit"
      className={`py-2 w-32 shadow-md px-6 h-12 max-lg:px-4 max-lg:h-10 max-lg:text-sm text-base bg-${bgColor} hover:bg-${bgColor}/90 text-${textColor} ${
        borderColor
          ? `border-2 border-${borderColor}`
          : "border-2 border-primary"
      } text-center  font-semibold focus:outline-none rounded-full  dark:bg-white dark:text-primary`}
      onClick={action}
    >
      {name}
    </button>
  );
}
