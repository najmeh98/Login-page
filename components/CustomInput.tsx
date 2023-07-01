import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";

interface TextInput {
  type: "text";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface TextPassword {
  type: "password";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
interface TextEmail {
  type: "email";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type InputCommonProps = {
  name: string;
  id: string;
  icon?: any;
  placeholder?: string;
  className?: string;
  value: string | number;
  label?: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onSubmit?: (() => void) | undefined;
};

type Props = (TextInput | TextPassword | TextEmail) & InputCommonProps;

export const CustomInput: React.FC<Props> = ({
  name,
  id,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  label,
}) => {
  return (
    <div className="w-full flex flex-col justify-start  items-start relative mt-4">
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="focus:outline-none focus:bg-white  outline-none h-[50px] px-4 shadow-md shadow-green-100 transition duration-150 ease-in-out	 flex rounded-lg w-full mb-[5px] font-normal  border border-solid border-green-700  focus:border-[1.5px] focus:border-[rgb(21, 128, 61)]"
      />

      {label && (
        <Label
          className={` absolute left-5 pointer-events-none pt-2 text-base transition-all  ${
            value
              ? " text-[#15803d]   -top-[20px]  px-1 bg-white"
              : "text-slate-400 "
          } `}
        >
          {label}
        </Label>
      )}
    </div>
  );
};
export const Input = styled.input`
  outline: none;
  direction: ltr !important;
  display: flex;
  border-radius: 8px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 5px;
  resize: none;
  font-size: medium;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border: 1.5px solid #15803d;
    background-color: rgb(255, 255, 255);
  }
  &:active {
    /* background-color: currentColor; */
    background-color: rgb(255, 255, 255);
  }
`;

const Label = styled.label`
  ${Input}:focus ~ & {
    transform: translateY(-56%) scale(0.8);
    padding: 4px;
    background-color: #ffff;
    color: #15803d;
    font-size: 20px;
    top: 0px;
  }
`;
