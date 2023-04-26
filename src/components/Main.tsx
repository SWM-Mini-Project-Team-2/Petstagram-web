import Header from "./Header";
import PetCard from "./PetCard";
import usePost from "../hooks/usePost";
import { Suspense } from "react";

function Main() {
  const { posts, setPostQuery } = usePost();

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
            posts.contents.map((post) => <PetCard key={post.id} post={post} />)}
        </section>
      </div>
    </div>
  );
}

export default Main;
