import { useTranslations } from "next-intl";
import { searchBlogs } from "@/app/actions";
import { useState } from "react";
import { Post } from "@prisma/client";
import Image from "next/image";

export default function SearchInput({
  rightSideMode,
}: {
  rightSideMode: "search" | "settings";
}) {
  const t = useTranslations("Navbar");
  const [posts, setPosts] = useState<Post[]>([]);

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    if (query.length < 3) {
      setPosts([]);
      return;
    }

    setPosts(await searchBlogs(query));
  }

  return (
    <div
      className={`flex  md:flex w-48 md:w-64 lg:w-96 ${
        rightSideMode === "search" ? "" : "hidden"
      }`}
    >
      <div className="relative w-full">
        <input
          onBlur={() => setPosts([])}
          onFocus={
            handleChange as (event: React.FocusEvent<HTMLInputElement>) => void
          }
          type="text"
          className="input input-bordered w-full text-md md:text-lg lg:text-lg text-center border-primary text-base-content  p-6 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={t("search")}
          onChange={handleChange}
        />

        <div
          className={`absolute z-20 mt-1 bg-base-200 w-full shadow-lg rounded-md max-h-60 md:max-h-90 lg:max-h-120 overflow-y-auto p-1 md:p-2 lg:p-3 ${
            posts.length == 0 && "hidden"
          } `}
        >
          {posts.map((post) => (
            <div
              className="p-1 md:p-2 lg:p-3 border-b border-primary text-sm md:text-base lg:text-lg bg-base-200  cursor-pointer text-base-content hover:bg-primary hover:text-primary-content rounded-md  block  justify-between items-center gap-4"
              key={post.id}
            >
              <Image
                className="hidden lg:inline-block rounded-md"
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
              />
              <span>{post.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
