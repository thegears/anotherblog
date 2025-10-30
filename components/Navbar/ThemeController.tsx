import { useTranslations } from "next-intl";
import { changeTheme } from "@/app/actions";

export default function ThemeController({
  rightSideMode,
}: {
  rightSideMode: "search" | "settings";
}) {
  const t = useTranslations("Navbar");

  const handleThemeChange = (theme: string) => {
    changeTheme(theme);
  };

  return (
    <div
      className={`dropdown  ${rightSideMode === "settings" ? "" : "hidden"}`}
    >
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost ml-1 w-8 md:w-16 lg:w-32  rounded-box text-base-content p-6"
      >
        {t("theme")}
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
            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
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
        className="dropdown-content p-1 bg-base-200 rounded-box md:w-32 max-h-100 overflow-auto"
      >
        {[
          "light",
          "dark",
          "cupcake",
          "bumblebee",
          "emerald",
          "corporate",
          "synthwave",
          "retro",
          "cyberpunk",
          "valentine",
          "halloween",
          "garden",
          "forest",
          "aqua",
          "lofi",
          "pastel",
          "fantasy",
          "wireframe",
          "black",
          "luxury",
          "dracula",
          "cmyk",
          "autumn",
          "business",
          "acid",
          "lemonade",
          "night",
          "coffee",
          "winter",
          "dim",
          "nord",
          "sunset",
          "caramellatte",
          "abyss",
          "silk",
        ].map((theme) => (
          <li key={theme} data-theme={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
              onChange={() => handleThemeChange(theme)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
