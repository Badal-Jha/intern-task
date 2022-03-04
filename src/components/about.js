import React from "react";
const About = () => {
  return (
    <div className="h-fit flex p-6 flex-col justify-center items-center lg:flex-row">
      <div className="w-full lg:w-1/2 flex items-center flex-col">
        <h4 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
          How to make powerfull photos?
        </h4>
        <button
          type="button"
          className="mt-[50px] text-black border-black border-2 h-[50px] w-[180px] text-center hover:bg-neutral-800 font-bold uppercase hover:text-white"
        >
          Learn More
        </button>
        <p className="text-gray-500 tracking-wide leading-9 text-xl mt-2 lg:mt-0">
          The most effective way to learn to make those special photos? Look at
          such photos. Study them, deconstruct them. That's what this resource
          is about. We'll go deep! You'll understand all the decisions behind my
          best images. First, I encourage you to emulate what I do. But soon...
          you'll be making your own powerful photos that reflect you as a
          photographer and as a creative being.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHZpbGxhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        className="w-[500px] rounded-md text-xl mt-3 lg:mt-0"
      ></img>
    </div>
  );
};

export default About;
