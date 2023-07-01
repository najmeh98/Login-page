import { SetStateAction, useState } from "react";
import OtpInput from "react18-input-otp";

export default function ReactOtpInput() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp: SetStateAction<string>) => {
    setOtp(enteredOtp);
  };
  return (
    <OtpInput
      value={otp}
      onChange={handleChange}
      numInputs={6}
      separator={<span>-</span>}
    />
  );
}
