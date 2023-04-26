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
}) =>
  (
    await axios.get<{ data: Post[] }>(
      `/post?${qs.stringify({ sort, follow, like })}`
    )
  ).data.data;

export const searchMyPosts = async () =>
  (await axios.get<{ data: Post[] }>("/post/my")).data.data;

export const searchPost = async (postId: number) =>
  (await axios.get<{ data: Post }>(`/post/${postId}`)).data.data;

export const uploadPost = async (imgSrc: string, description: string) =>
  (await axios.post<{ data: Post }>("/post", { imgSrc, description })).data
    .data;

export const likePost = async (postId: number) =>
  (await axios.post<{ data: Post }>(`/post/${postId}/like`)).data.data;

export const checkPostLiked = async (postId: number) =>
  (await axios.get<{ data: Post }>(`/post/${postId}/like`)).data.data;

export const checkPostFollwed = async (postId: number) =>
  (await axios.get<{ data: Post }>(`/post/${postId}/follow`)).data.data;

export const deletePost = async (postId: number) =>
  (await axios.delete<{ data: Post }>(`/post/${postId}`)).data.data;
