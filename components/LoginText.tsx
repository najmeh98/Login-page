import React from "react";

interface IText {
  text: string;
  title: string;
}

export const LoginText = ({ text, title }: IText): React.JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-start w-full whitespace-nowrap ">
      <h1 className="text-2xl font-normal font-sans">{title}</h1>

      <p className="text-base text-slate-400 pt-2 font-sans">{text}</p>
    </div>
  );
};
