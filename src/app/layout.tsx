import { Metadata } from "next";
import "./scss/reset.scss"
import { fonts } from "@/fonts/fonts";
import { Footer, Header } from "@/widgets";
import { Banner } from "@/widgets";

export const metadata: Metadata = {
  title: "ITLevel",
  description: "Сайт компании по ремонту ноутбуков и компьютеров",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={fonts.body3.className}>
        <Header />
        <Banner />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
