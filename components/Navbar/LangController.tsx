import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LangController({
  rightSideMode,
}: {
  rightSideMode: "search" | "settings";
}) {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`dropdown  ${rightSideMode === "settings" ? "" : "hidden"}`}
    >
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost ml-1 w-8 md:w-16 lg:w-32  rounded-box text-base-content  p-6"
      >
        {t("lang")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hidden lg:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>

        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content text-base-content p-1 bg-base-200 rounded-box md:w-32 max-h-100  overflow-auto"
      >
        <li>
          <input
            onClick={() => router.replace(pathname, { locale: "tr" })}
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="🇹🇷 TR"
            value="🇹🇷 TR"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="🇬🇧 EN"
            value="🇬🇧 EN"
            onClick={() => router.replace(pathname, { locale: "en" })}
          />
        </li>
      </ul>
    </div>
  );
}
