export default function ChangeRightSide({
  setRightSideMode,
  rightSideMode,
}: {
  setRightSideMode: (mode: "search" | "settings") => void;
  rightSideMode: "search" | "settings";
}) {
  return (
    <div
      onClick={() =>
        setRightSideMode(rightSideMode === "search" ? "settings" : "search")
      }
      className="ml-2 mr-2 md:hidden  flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    </div>
  );
}
