import { postQuery } from "../states/post";
import { useRecoilValueLoadable } from "recoil";
import { FcLike } from "react-icons/fc";
import { GrFormView } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { useEffect } from "react";
import usePost from "../hooks/usePost";

interface Props {
  postId: string | null;
  setPostId: React.Dispatch<React.SetStateAction<string | null>>;
}

function PetModal({ postId, setPostId }: Props) {
  const { post, likePost } = usePost(postId);

  return post.state === "hasValue" ? (
    <div
      onClick={(e) => {
        setPostId(null);
      }}
      className="absolute bg-[#1111114f] top-0 left-0 w-screen h-screen bg-tran flex justify-center items-center"
    >
      <div
        className="w-1/2 bg-white py-4 px-8 rounded-xl flex"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <img src={post.contents.imgSrc} className="mx-auto object-cover" />
          <div className="flex mt-2 items-center">
            <FcLike className="h-[24px] w-auto" />
            <p className="ml-2">{post.contents.like}</p>
            <GrFormView className="h-[24px] ml-4 w-auto" />
            <p className="ml-2">{post.contents.view}</p>
            <div className="flex-1"></div>
            <div className="cursor-pointer" onClick={likePost}>
              <AiFillLike className="h-[24px] w-auto" />
            </div>
          </div>
        </div>
        <p className="w-60 ml-4">{post.contents.description}</p>
      </div>
    </div>
  ) : null;
}

export default PetModal;
