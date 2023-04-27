import axios from "axios";

export const login = async (email: string, password: string) =>
  (await axios.post("/user/login", { email, password })).data;

export const signup = async (email: string, name: string, password: string) =>
  (await axios.post("/user", { email, name, password })).data;

export const checkEmailDuplication = async (email: string) =>
  (await axios.post("/user/duplicate", { email })).data;

export const followUser = async (userId: number) =>
  (await axios.post(`/user/${userId}/follow`)).data;

export const getMyName = async () => (await axios.get("/user/myname")).data;
