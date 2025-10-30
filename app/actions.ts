"use server";

import prisma from "@/lib/prisma";

export async function searchBlogs(query: string) {
  if (query.length < 3) {
    return [];
  }

  const blogs = await prisma.post.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 10,
  });

  return blogs;
}
