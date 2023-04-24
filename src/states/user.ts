import { atom } from "recoil";

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isAuth: false,
  },
});
