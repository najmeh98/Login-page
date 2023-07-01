export const BASE_URL = "https://proapi.snapp.market/mart/v1";

const endpoints = {
  auth: {
    otp: "user/loginMobileWithNoPass",
    validate: "/user/loginMobileWithToken",
  },
};

export default endpoints;
