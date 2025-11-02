import { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import NavBar from "@/components/Navbar";

export async function generateMetadata({}): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const messages = await getMessages();

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";

  return (
    <NextIntlClientProvider messages={messages}>
      <NavBar />
      {children}
    </NextIntlClientProvider>
  );
}
