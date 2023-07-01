import http from ".";
import endpoints from "./endpoint";

export const sendOTPRequest = (phoneNumber: string) => {
  return http.post(
    endpoints.auth.otp,
    {},
    {
      cellphone: phoneNumber,
    }
  );
};
//return : "https://proapi.snapp.market/mart/v1/user/loginMobileWithNoPassellphone=091....";

export const submitValidation = (phoneNumber: string, otp: string) => {
  return http.post(
    endpoints.auth.validate,
    {},
    {
      cellphone: phoneNumber,
      code: otp,
      client: "PWA",
      platform: "PWA",
      deviceType: "Browser",
      appVersion: "2.0.0",
    }
  );
};
