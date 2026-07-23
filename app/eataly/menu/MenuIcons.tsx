import type { MenuSection } from "./menuData";

// Simple line icons marking each section of the carte.
const paths: Record<MenuSection["icon"], React.ReactNode> = {
  starter: (
    <>
      <path d="M3 13a9 9 0 0 1 18 0z" />
      <path d="M2.5 13h19" />
      <path d="M9 9.5h.01M12 7.5h.01M15 9.5h.01" />
    </>
  ),
  pizza: (
    <>
      <path d="M12 3 3.5 19.5c-.4.8.3 1.7 1.2 1.4L12 18.5l7.3 2.4c.9.3 1.6-.6 1.2-1.4z" />
      <path d="M6.5 13.5c3.5-1.5 7.5-1.5 11 0" />
      <path d="M10 9.5h.01M13.5 12.5h.01M9.5 15.5h.01" />
    </>
  ),
  pasta: (
    <>
      <path d="M3.5 11h17a8.5 8.5 0 0 1-17 0z" />
      <path d="M2 11h20" />
      <path d="M7 7.5c0-1.5 1-2.5 2-2.5M11 7.5c0-1.5 1-2.5 2-2.5M15 7.5c0-1.5 1-2.5 2-2.5" />
    </>
  ),
  dolci: (
    <>
      <path d="M4 20h16v-6H4z" />
      <path d="M5.5 14c0-3 2.9-5 6.5-5s6.5 2 6.5 5" />
      <path d="M12 9V6.5M12 6.5c1 0 1.6-.6 1.6-1.5S12.9 3.5 12 3.5s-1.6.6-1.6 1.5.6 1.5 1.6 1.5z" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7 5V3.5M10.5 5V3.5M14 5V3.5" />
    </>
  ),
  capsule: (
    <>
      <path d="M8 4h8l-1.5 9h-5z" />
      <path d="M9.5 13h5l-.8 7h-3.4z" />
      <path d="M8.5 7.5h7" />
    </>
  ),
  chocolate: (
    <>
      <path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 6.5c0-1 1-1.5 1-2.5M11.5 6.5c0-1 1-1.5 1-2.5" />
    </>
  ),
  juice: (
    <>
      <path d="M8 7h8l-1 12H9z" />
      <path d="M9.5 4h5l1 3H8.5z" />
      <path d="M12 4V2.5" />
      <path d="M8.6 11.5h6.8" />
    </>
  ),
  soda: (
    <>
      <path d="M8 8h8v9a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" />
      <path d="M9.5 8V4.5h5V8" />
      <path d="M8.4 12h7.2" />
    </>
  ),
};

export default function MenuIcon({ name, color }: { name: MenuSection["icon"]; color: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
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
