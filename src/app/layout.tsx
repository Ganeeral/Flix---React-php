import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/sidebar/Sidebar";
import SearchBar from "@/components/searchbar/search";

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
          <div id="page">
            <SearchBar /> 
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
