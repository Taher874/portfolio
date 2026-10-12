
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taher Itawa | Full-Stack Developer",
  description:
    "Portfolio of Taher Itawa — a full-stack developer building mobile applications, web experiences, and scalable backend systems.",
  applicationName: "Taher Itawa Portfolio",
  openGraph: {
    title: "Taher Itawa | Full-Stack Developer",
    description:
      "Building thoughtful digital products through mobile, web, and backend development.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
