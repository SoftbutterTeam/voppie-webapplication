import {
  apple,
  facebookColor,
  googleC,
} from "../../../../assets/icons/services";

export interface LoginButtonsDataTypes {
  icon?: string | any;
  title?: string;
  alt?: string;
}

export const AuthServiceOpts = [
  {
    icon: facebookColor,
    title: "Continue with Facebook",
    alt: "facebook",
  },
  {
    icon: googleC,
    title: "Continue with Google",
    alt: "google",
  },
  {
    icon: apple,
    title: "Continue with Apple",
    alt: "apple",
  },
] as LoginButtonsDataTypes[];
