import { sendOTPRequest, submitValidation } from "@/api/function";
import { useFormik } from "formik";
import React, { useState } from "react";
import { CustomInput } from "./CustomInput";
import { Layout } from "./Layout";
import { Input, Space } from "./Space";
import { CustomButton } from "./CustomButton";
import { SignUpSchema } from "./Validation";
import { LoginText } from "./LoginText";
import OtpInput from "react18-input-otp";
import { BacktoNumberIcon } from "./icons/icons";
import { onResponse } from "@/api";
import { Router, useRouter } from "next/router";

const initialValues = {
  phoneNumber: "",
  otp: "",
};

export const LoginByPhoneNumber = (): React.JSX.Element => {
  const [isSending, setisSending] = useState<boolean>(false);
  const [isInVerification, setVerification] = useState(false);

  const [Login, setLogin] = useState(false);

  const sendOTP = (phone: string): void => {
    setisSending(true);
    sendOTPRequest(phone)
      .then((response) => {
        console.log(response.status);
        console.log(response);

        if ((response.status as number) == 200) {
          setVerification(true);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisSending(false);
      });
  };

  const onSubmitVerification = (phone: string, otp: string) => {
    setisSending(true);

    onResponse(values.otp);

    submitValidation(phone, otp)
      .then((res) => {
        console.log(res);

        //if response is true then redirect to dashboard else show error message

        if ((res?.status as number) == 200) {
          setLogin(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setisSending(false);
      });
  };

  const {
    values,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,

    onSubmit: (values) => {
      console.log("validation success✅");
      console.log(values);

      isInVerification
        ? onSubmitVerification(values.phoneNumber, values.otp)
        : sendOTP(values.phoneNumber);
    },
  });

  const handleChangeOtp = (enteredOtp: any): void => {
    setFieldValue("otp", enteredOtp);
  };

  const BacktoPhoneSlid = (): void => {
    setVerification(false);
    setFieldValue("otp", "");
  };

  console.log("otp", values.otp);
  console.log("numb", values.phoneNumber);

  return (
    <Layout>
      {!Login ? (
        <div className="flex flex-col  items-start justify-between w-full whitespace-nowrap relative  ">
          <div onClick={BacktoPhoneSlid}>
            {isInVerification && BacktoNumberIcon}
          </div>

          <LoginText
            text={
              !isInVerification
                ? "We will send you confirmation code"
                : `We send it to the number ${values.phoneNumber}`
            }
            title={
              !isInVerification
                ? "Enter your mobile number"
                : "Enter code sent to your phone"
            }
          />

          <Space vertical={30} />

          <form onSubmit={handleSubmit} className="w-full ">
            {isInVerification ? (
              <OtpInput
                value={values.otp}
                onChange={handleChangeOtp}
                numInputs={5}
                isSuccessed={true}
                successStyle="success"
                containerStyle={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                inputStyle={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#a5db9c",
                  fontSize: 18,
                }}
                shouldAutoFocus
                focusStyle={{
                  color: "#15803d",
                  borderColor: "#15803d",
                  borderWidth: "2px",
                  outline: "none",
                  backgroundColor: "#f2fef7",
                }}
              />
            ) : (
              <CustomInput
                type="text"
                value={values.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
                name="phoneNumber"
                onBlur={handleBlur}
                label="PhoneNumber"
              />
            )}

            {touched.phoneNumber && errors.phoneNumber && (
              <p className="text-base text-green-400 pt-[6px]">
                {errors.phoneNumber}
              </p>
            )}

            {isInVerification && (
              <p
                className=" flex flex-col text-base text-gray-500 w-full items-center justify-center mt-8"
                onClick={() => sendOTP(values.phoneNumber)}
              >
                Didn&apos;t receive OTP code?
                <span className="text-green-500 underline cursor-pointer">
                  Resend Code
                </span>
              </p>
            )}
            <Space vertical={42} />

            <CustomButton
              type="submit"
              className="border-none bg-green-700 rounded-lg text-[#fff] w-full h-11 cursor-pointer  text-base"
              disabled={!!Object.keys(errors).length}
              text={isInVerification ? "Enter" : "Next"}
            />
          </form>
        </div>
      ) : (
        <div className="">
          <p className="text-lg text-green-700">You successfully Login... 🎉</p>
        </div>
      )}
    </Layout>
  );
};
