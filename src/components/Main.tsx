import Header from "./Header";
import PetCard from "./PetCard";
import usePosts from "../hooks/usePosts";
import PetModal from "./PetModal";
import { useState } from "react";

function Main() {
  const { posts, setPostQuery } = usePosts();
  const [postId, setPostId] = useState<string | null>(null);

  return (
    <div className="bg-[#f8f8f8] h-screen">
      <Header />
      <div className="container mx-auto">
        <div className="w-full flex justify-end pt-4 pb-2">
          <select
            onChange={(e) => {
              setPostQuery({ sort: parseInt(e.target.value) });
            }}
          >
            <option value={0}>times</option>
            <option value={1}>likes</option>
          </select>
        </div>
        <section className="grid grid-cols-2  gap-4">
          {posts.state === "hasValue" &&
            posts.contents.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  setPostId(post.id);
                }}
              >
                <PetCard post={post} />
              </div>
            ))}
        </section>
        <PetModal postId={postId} setPostId={setPostId} />
      </div>
    </div>
  );
}

export default Main;
