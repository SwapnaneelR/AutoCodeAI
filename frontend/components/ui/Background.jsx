import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      <div className=" z-[-1]  absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
