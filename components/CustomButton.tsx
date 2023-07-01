import React from "react";

interface IButton {
  text: string;
  type: any;
  disabled: boolean;
  className: string;
}

export const CustomButton = ({
  text,
  type,
  disabled,
  className,
}: IButton): React.JSX.Element => {
  return (
    <button type={type} disabled={disabled} className={className}>
      {text}
    </button>
  );
};
