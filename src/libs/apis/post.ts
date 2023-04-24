import axios from "axios";
import qs from "qs";

export const searchPosts = async ({
  sort = 0,
  follow = false,
  like = false,
}: {
  sort: number;
  follow: boolean;
  like: boolean;
}) => (await axios.get(`/post?${qs.stringify({ sort, follow, like })}`)).data;

export const searchMyPosts = async () => (await axios.get("/post/my")).data;

export const searchPost = async (postId: number) =>
  (await axios.get(`/post/${postId}`)).data;

export const uploadPost = async (imgSrc: string, description: string) =>
  (await axios.post("/post", { imgSrc, description })).data;

export const likePost = async (postId: number) =>
  (await axios.post(`/post/${postId}/like`)).data;

export const checkPostLiked = async (postId: number) =>
  (await axios.get(`/post/${postId}/like`)).data;

export const checkPostFollwed = async (postId: number) =>
  (await axios.get(`/post/${postId}/follow`)).data;

export const deletePost = async (postId: number) =>
  (await axios.delete(`/post/${postId}`)).data;
