/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "@/const/icons/icons";

const TextModal = ({ text1, text2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full"
        onClick={handleToggle}
      >
        {isOpen ? <AiOutlinePlus size={24} /> : <AiOutlineMinus size={24} />}
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <div className="mb-4 border-b-2 border-gray-300">
              <h2 className="text-xl font-bold">{text1}</h2>
            </div>
            <div className="py-4">
              <p className="mb-4">
                As people scroll, they gather ideas for what to try next. The
                more they use Placio, the better their personalised
                recommendations become.
              </p>
              <hr className="border-gray-300 my-4" />
              <p className="font-semibold">This is a modal!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextModal;
