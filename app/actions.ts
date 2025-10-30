"use server";

import prisma from "@/lib/prisma";

import { getLocale } from "next-intl/server";
import { cookies } from "next/headers";

export async function searchBlogs(query: string) {
  if (query.length < 3) {
    return [];
  }

  const locale = await getLocale();

  const blogs = await prisma.post.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
      language: locale,
    },
    take: 10,
  });

  return blogs;
}

export async function changeTheme(theme: string) {
  const cookieStore = await cookies();
  cookieStore.set("theme", theme);
}
