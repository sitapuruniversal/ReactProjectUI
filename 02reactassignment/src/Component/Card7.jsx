/* eslint-disable no-unused-vars */
import React from "react";

function Card7() {
  return (
    <div className="max-w-6xl w-full m-auto">
      <div className="w-full bg-gray-800 py-10 mb-5 text-center">
        <h1 className="text-3xl font-semibold text-center text-white">
          Subscribe To Our NewsLetter
        </h1>

        <div className="px-5 mt-5">
          <input
            className="w-[700px] text-center h-10 px-5 rounded-md"
            type="email"
            placeholder="Enter Your Email ID"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-purple-200 px-16 py-2 my-3 rounded-xl font-semibold">
            Subcribe Now
          </button>
        </div>
      </div>
      <div className="text-center font-mono text-base text-black  ">
        CopyRight 2023-24
      </div>
    </div>
  );
}

export default Card7;
