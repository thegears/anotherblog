"use client";

import { useTranslations } from "next-intl";
import SearchInput from "./SearchInput";

export default function NavBar() {
  const t = useTranslations("Navbar");

  return (
    <div>
      <SearchInput />
    </div>
  );
}
