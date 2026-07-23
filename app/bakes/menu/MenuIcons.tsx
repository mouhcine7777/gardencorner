import type { MenuSection } from "./menuData";

// Simple line icons echoing the printed menu's section marks.
const paths: Record<MenuSection["icon"], React.ReactNode> = {
  croissant: (
    <>
      <path d="M3 15c3 2 6 3 9 3s6-1 9-3l-2-4c-2-3-4-4.5-7-4.5S7.5 8 5.5 11z" />
      <path d="M7.5 9.5 6 6M12 8V4M16.5 9.5 18 6" />
    </>
  ),
  bread: (
    <>
      <path d="M4 11c0-3 2.5-5 5-5h6c2.5 0 5 2 5 5 0 1.5-1 2-2 2v5H6v-5c-1 0-2-.5-2-2z" />
      <path d="M9 8.5 8 12M12.5 8.5l-1 3.5M16 8.5 15 12" />
    </>
  ),
  sandwich: (
    <>
      <path d="M4 9c0-2 3.5-3.5 8-3.5S20 7 20 9v1H4z" />
      <path d="M4 13h16v1c0 2-3.5 4-8 4s-8-2-8-4z" />
      <path d="M4 10.5h16" />
    </>
  ),
  breakfast: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  juice: (
    <>
      <path d="M8 7h8l-1 12H9z" />
      <path d="M9.5 4h5l1 3H8.5z" />
      <path d="M12 4V2.5" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7 5V3.5M10.5 5V3.5M14 5V3.5" />
    </>
  ),
  drink: (
    <>
      <path d="M7 4h10l-1.5 16h-7z" />
      <path d="M7.6 9.5h8.8" />
    </>
  ),
  waffle: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9.5 4.5v15M14.5 4.5v15M4.5 9.5h15M4.5 14.5h15" />
    </>
  ),
  quiche: (
    <>
      <path d="M3 13a9 9 0 0 1 18 0z" />
      <path d="M3 13h18" />
      <path d="M9 9.5h.01M12 7.5h.01M15 9.5h.01" />
    </>
  ),
  pastry: (
    <>
      <path d="M5 19h14v-5H5z" />
      <path d="M6.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M12 9V6M12 6c1 0 1.5-.6 1.5-1.5S12.8 3 12 3s-1.5.6-1.5 1.5S11 6 12 6z" />
    </>
  ),
  icecream: (
    <>
      <path d="M8 10h8l-4 10z" />
      <path d="M8.5 10a3.5 3.5 0 0 1 0-1 3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 0 1" />
      <path d="M9 6.5a2.5 2.5 0 0 1 6 0" />
    </>
  ),
};

export default function MenuIcon({ name }: { name: MenuSection["icon"] }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c99a2e"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {paths[name]}
    </svg>
  );
}
