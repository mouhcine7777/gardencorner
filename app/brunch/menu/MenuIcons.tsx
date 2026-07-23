import type { MenuSection } from "./menuData";

// Simple line icons marking each section of the carte.
const paths: Record<MenuSection["icon"], React.ReactNode> = {
  juice: (
    <>
      <path d="M8 7h8l-1 12H9z" />
      <path d="M9.5 4h5l1 3H8.5z" />
      <path d="M12 4V2.5" />
      <path d="M8.6 11.5h6.8" />
    </>
  ),
  smoothie: (
    <>
      <path d="M7.5 8h9l-1 11a2 2 0 0 1-2 1.8h-3A2 2 0 0 1 8.5 19z" />
      <path d="M7 8c0-2.2 2.2-4 5-4s5 1.8 5 4" />
      <path d="M14.5 4.5 16 2" />
    </>
  ),
  mojito: (
    <>
      <path d="M5 6h14l-6 7v6" />
      <path d="M9.5 19h5" />
      <path d="M15 5c1-1.5 2.5-2 4-2-.3 1.8-1.3 3-2.7 3.4" />
    </>
  ),
  icedtea: (
    <>
      <path d="M7 7h10l-1 13H8z" />
      <path d="M9.5 10.5l3 3M14.5 10.5l-3 3" />
      <path d="M8 4.5h8" />
    </>
  ),
  frappe: (
    <>
      <path d="M7 9h10l-1 11H8z" />
      <path d="M8 6a2 2 0 0 1 2-2c.4-1 1.4-1.5 2.4-1.2A2 2 0 0 1 16 6z" />
      <path d="M12 20v2" />
    </>
  ),
  teapot: (
    <>
      <path d="M5 11h12v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M17 12.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M5 12 2.5 9.5" />
      <path d="M9 8.5c0-1 1-1.5 1-2.5M13 8.5c0-1 1-1.5 1-2.5" />
    </>
  ),
  latte: (
    <>
      <path d="M6 8h11v6a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4z" />
      <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M9.5 11.5a2 2 0 0 1 4 0 2 2 0 0 1-4 0z" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7 5V3.5M10.5 5V3.5M14 5V3.5" />
    </>
  ),
  salad: (
    <>
      <path d="M3 12a9 9 0 0 0 18 0z" />
      <path d="M2.5 12h19" />
      <path d="M8 9c.5-2 2-3 4-3s3.5 1 4 3" />
      <path d="M12 6V4" />
    </>
  ),
  burger: (
    <>
      <path d="M4 9c0-2.5 3.6-4.5 8-4.5S20 6.5 20 9z" />
      <path d="M4 12h16" />
      <path d="M4 15h16v.5c0 2.2-3.6 4-8 4s-8-1.8-8-4z" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
    </>
  ),
  tray: (
    <>
      <path d="M3 13h18a9 9 0 0 1-18 0z" />
      <path d="M2 13h20" />
      <path d="M8.5 9.5c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5" />
      <path d="M12 7V4.5" />
    </>
  ),
  egg: (
    <>
      <ellipse cx="12" cy="13" rx="6.5" ry="8" />
      <circle cx="12" cy="13.5" r="2.5" />
    </>
  ),
  croissant: (
    <>
      <path d="M3 15c3 2 6 3 9 3s6-1 9-3l-2-4c-2-3-4-4.5-7-4.5S7.5 8 5.5 11z" />
      <path d="M7.5 9.5 6 6M12 8V4M16.5 9.5 18 6" />
    </>
  ),
  dessert: (
    <>
      <path d="M6 10h12l-1.5 9a2 2 0 0 1-2 1.7h-5a2 2 0 0 1-2-1.7z" />
      <path d="M8 10c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
      <path d="M12 6.5V4.5M12 4.5c1 0 1.5-.6 1.5-1.4S12.8 1.8 12 1.8s-1.5.5-1.5 1.3.5 1.4 1.5 1.4z" />
    </>
  ),
  cake: (
    <>
      <path d="M4 20h16v-6H4z" />
      <path d="M5.5 14c0-3 2.9-5 6.5-5s6.5 2 6.5 5" />
      <path d="M12 9V6.5M12 6.5c1 0 1.6-.6 1.6-1.5S12.9 3.5 12 3.5s-1.6.6-1.6 1.5.6 1.5 1.6 1.5z" />
    </>
  ),
  pancake: (
    <>
      <ellipse cx="12" cy="8" rx="8" ry="3" />
      <path d="M4 8v3c0 1.7 3.6 3 8 3s8-1.3 8-3V8" />
      <path d="M4 13v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3" />
    </>
  ),
  toast: (
    <>
      <path d="M6 9c0-3 2.7-5 6-5s6 2 6 5v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
      <path d="M6 9H4.5a1.5 1.5 0 0 1 0-3H6M18 9h1.5a1.5 1.5 0 0 0 0-3H18" />
      <path d="M9.5 13.5h5" />
    </>
  ),
  madeleine: (
    <>
      <path d="M4 13c0-3.9 3.6-7 8-7s8 3.1 8 7c0 2.2-3.6 3.5-8 3.5S4 15.2 4 13z" />
      <path d="M8 8.5 7 15M12 6.7V16.5M16 8.5l1 6.5" />
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
