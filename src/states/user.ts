import { atom, selector } from "recoil";
import * as userApi from "../libs/apis/user";

export const authAom = atom<AuthState>({
  key: "authState",
  default: {
    isAuth: false,
    userId: 0,
  },
});

export const myNameAtom = atom<string>({
  key: "myNameState",
  default: selector({
    key: "myNameState/default",
    get: async ({ get }) => {
      get(authAom); // Add authState dependency
      return await userApi.getMyName();
    },
  }),
});
