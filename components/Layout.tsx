/* eslint-disable @next/next/no-img-element */
import React from "react";

type OwnProp = {
  children: React.ReactNode;
};

export const Layout = ({ children }: OwnProp) => {
  return (
    <div className=" w-full h-screen max-h-[570px] max-w-[1100px]  shadow-lg 2xl:max-w-screen-2xl  flex items-center justify-between rounded-[32px]  border-2 border-solid border-green-800">
      <div className="flex-1 flex-col shadow-md bg-green-100 shadow-green-600 rounded-tl-[32px]  rounded-bl-[32px]   h-full flex items-center justify-center  ">
        <p className="text-2xl font-medium text-green-900 w-full flex items-center justify-center ">
          Create better together.
        </p>

        <img src="./plantImg.png" alt="plant" className="mt-3" />
        <p className="text-slate-600 text-base">Join our community</p>
      </div>
      <div className=" flex-1 flex  items-center justify-center flex-col w-full h-full p-[50px] ">
        {children}
      </div>
    </div>
  );
};
