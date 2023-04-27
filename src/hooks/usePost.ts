import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { postQuery } from "../states/post";
import { likePost } from "../libs/apis/post";

export default function usePost(postId: string | null) {
  const post = useRecoilValueLoadable(postQuery(postId || ""));
  const _likePost = () => {
    if (postId) {
      likePost(postId);
    }
    useRecoilRefresher_UNSTABLE(postQuery(postId || ""))();
  };

  return { post, likePost: _likePost };
}
