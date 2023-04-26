import { FcLike } from "react-icons/fc";
import { GrFormView } from "react-icons/gr";

interface Props {
  post: Post;
}

const PetCard = ({ post }: Props) => {
  return (
    <div className="bg-white py-4 px-8 rounded-xl cursor-pointer">
      <img src={post.imgSrc} className="mx-auto h-60 object-cover" />
      <div className="flex mt-2 items-center">
        <FcLike className="h-[24px] w-auto" />
        <p className="ml-2">{post.like}</p>
        <GrFormView className="h-[24px] ml-4 w-auto" />
        <p className="ml-2">{post.view}</p>
      </div>
    </div>
  );
};

export default PetCard;
