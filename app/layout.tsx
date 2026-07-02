import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "ChartCraft", description: "Drag & Drop Online Dashboard Builder Platform" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="th"><body>{children}</body></html>; }
