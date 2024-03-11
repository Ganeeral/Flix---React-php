import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/header";
import SideBarMobile from "@/components/sidebar/sidebarMobile";

export const metadata: Metadata = {
  title: "Видеохостинг - Flix",
  description: "Сайт видеохостинга Flix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white">
        <div className="flex h-full w-full">
          <SideBar />
          <SideBarMobile/>
          <div id="page">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
