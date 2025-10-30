import { useTranslations } from "next-intl";
import { searchBlogs } from "@/app/actions";
import { useState } from "react";
import { Post } from "@/app/generated/prisma/client";

export default function SearchInput() {
  const t = useTranslations("Navbar");
  const [posts, setPosts] = useState<Post[]>([]);

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setPosts(await searchBlogs(query));
  }

  return (
    <>
      {" "}
      <input
        type="text"
        className="input"
        placeholder={t("search")}
        onChange={handleChange}
        list="posts"
      />
      <datalist id="posts">
        {posts.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>
    </>
  );
}
