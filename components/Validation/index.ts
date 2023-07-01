import { object, ref, string } from "yup";

const phoneRegExp =
  /[0۰][9۹]([0-39۹\u06F0-\u06F3])[0-9\u06F0-\u06F9]-?[0-9\u06F0-\u06F9]{3}-?[0-9\u06F0-\u06F9]{4}/gu;

export const SignUpSchema = object({
  phoneNumber: string()
    .required("Please Enter your phoneNumber!")
    .matches(phoneRegExp, "Invalid phone Number"),
});
