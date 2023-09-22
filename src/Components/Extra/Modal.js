import React from "react";
import { VscChromeClose } from "react-icons/vsc";

function Modal({ handelModal }) {
  return (
    <div className="fixed z-10 inset-0 overflow-hidden text-white bg-opacity-75 bg-gray-400 ">
      <div className="bg-black m-auto  shadow-xl my-20  sm:my-40 rounded-lg px-4 py-8 pb-8 w-3/5 sm:w-2/5 h-auto">
        <div className="text-xl sm:text-2xl cursor-pointer hover:text-red-700 flex justify-end">
          <VscChromeClose onClick={handelModal} />
        </div>
        <div className="text-center sm:mt-6 mt-3">
          <h1 className="sm:text-2xl text-xl sm:pb-4 pb-2">Hello From Modal</h1>
          <p>
            this is a bset modal that you make with tailwind css jawad huge
            congrate mate, what do u things about it
          </p>
        </div>
        <div className="flex justify-between items-center sm:px-8 sm:pt-20 pt-10 ">
          <button
            onClick={handelModal}
            className=" px-3 py-2 sm:px-6 sm:py-3  rounded-full hover:scale-110  transform ease-in-out bg-red-700 hover:bg-red-800 shadow-lg"
       
          >
            Cancele
          </button>
          <button
            onClick={handelModal}
            className="px-3 py-2 sm:px-6 sm:py-3 hover:scale-110  transform ease-linear  rounded-full bg-green-700  text-white shadow-lg hover:bg-green-800"         
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
