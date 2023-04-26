import { selector, selectorFamily } from "recoil";
import * as postApi from "../libs/apis/post";
import { authAom } from "./user";

export const myPostsAtom = selector({
  key: "myPosts",
  get: async ({ get }) => {
    get(authAom); // Add authState dependency
    return await postApi.searchMyPosts();
  },
});

export const postsQuery = selectorFamily({
  key: "posts",
  get:
    ({
      sort,
      follow,
      like,
    }: {
      sort: number;
      follow: boolean;
      like: boolean;
    }) =>
    async () => {
      return await postApi.searchPosts({ sort, follow, like });
    },
});

export const postQuery = selectorFamily({
  key: "post",
  get: (postId: string) => async () => {
    return await postApi.searchPost(postId);
  },
});
