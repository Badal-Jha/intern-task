import React from "react";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-[20px] flex flex-col justify-center items-center h-[200px]">
      <p className="text-xs uppercase">
        subscribe to my newsletter for more regular updates
      </p>
      <div>
        <input
          type="email"
          placeholder="email address"
          className="w-[200px] md:w-[300px] lg:w-[400px] h-[30px] outline-none text-black"
        ></input>
        <button
          type="button"
          className="mt-[10px] text-white border-white border-2 h-[30px] w-[120px] text-center hover:bg-white font-bold uppercase hover:text-black ml-[5px]"
        >
          subscribe
        </button>
      </div>

      <p className="mt-[90px]">all rights resereved</p>
    </div>
  );
};

export default Footer;
