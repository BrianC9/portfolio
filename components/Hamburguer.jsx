import React, { useState } from "react";

export default function Hamburguer({ isOpen, handleIsOpen }) {
  return (
    <>
      <div className="flex flex-col justify-center py-6  sm:py-12">
        <div className="relative py-3 mx-auto sm:max-w-xl">
          <nav>
            <button
              className="relative w-10 h-10 text-primary bg-white rounded-sm focus:outline-none"
              onClick={handleIsOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    isOpen && "opacity-0"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
