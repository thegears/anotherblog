"use client";

import { useTranslations } from "next-intl";
import SearchInput from "./SearchInput";
import { Oswald } from "next/font/google";
import ThemeController from "./ThemeController";
import LangController from "./LangController";
import ChangeRightSide from "./ChangeRightSide";
import { useState } from "react";

const OswaldFont = Oswald();

export default function NavBar() {
  const t = useTranslations("Navbar");
  const [rightSideMode, setRightSideMode] = useState<"search" | "settings">(
    "settings"
  );

  return (
    <div
      className={` transition-all duration-200 ease-in-out navbar p-2 md:p-4 lg:p-6 bg-base-300  fixed flex justify-between ${OswaldFont.className}`}
    >
      <span
        className={`font-bold text-2xl md:text-4xl lg:text-6xl  text-primary text-shadow-md text-shadow-primary cursor-pointer`}
      >
        {t("title")}
      </span>
      <div className="flex">
        <ChangeRightSide
          setRightSideMode={setRightSideMode}
          rightSideMode={rightSideMode}
        />
        <SearchInput rightSideMode={rightSideMode} />
        <ThemeController rightSideMode={rightSideMode} />
        <LangController rightSideMode={rightSideMode} />
      </div>
    </div>
  );
}
