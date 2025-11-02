import { cookies } from "next/headers";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cookieStore = await cookies();

  const theme = cookieStore.get("theme")?.value || "dark";

  return (
    <html data-theme={theme}>
      <body> {children} </body>
    </html>
  );
}
