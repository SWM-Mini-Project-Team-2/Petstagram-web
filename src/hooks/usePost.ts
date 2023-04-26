import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { myPostsAtom, postsQuery } from "../states/post";
import { useState } from "react";

interface Query {
  sort: number;
  follow: boolean;
  like: boolean;
}

export default function usePost() {
  const [query, setQuery] = useState<Query>({
    sort: 0,
    follow: false,
    like: false,
  });

  const myPosts = useRecoilValueLoadable(myPostsAtom);
  const posts = useRecoilValueLoadable(postsQuery(query));

  const setPostQuery = ({ sort, follow, like }: Partial<Query>) => {
    setQuery({
      sort: sort ? sort : query.sort,
      follow: follow ? follow : query.follow,
      like: like ? like : query.like,
    });
  };

  return { myPosts, posts, setPostQuery };
}
