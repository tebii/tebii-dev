import { getCollection } from "astro:content";

export type SidebarKey = "home" | "writeups";

export type SidebarItem = {
  key: SidebarKey;
  label: string;
  href: string;
  count?: number;
};

export async function buildSidebarItems(): Promise<SidebarItem[]> {
  const writeups = (await getCollection("writeups")).filter((p) => !p.data.draft);

  return [
    { key: "home", label: "home", href: "/" },
    { key: "writeups", label: "writeups", href: "/writeups", count: writeups.length },
  ];
}

export function activeKeyFromPath(pathname: string): SidebarKey {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/writeups")) return "writeups";
  return "writeups";
}
