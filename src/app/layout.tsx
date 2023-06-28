import { Metadata } from "next";
import "./scss/reset.scss";
import { fonts } from "@/fonts/fonts";
import { Footer, Header } from "@/widgets";
import { Banner } from "@/widgets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Ремонт ноутбуков и компьютеров в Балаково и Саратове",
  description: "Ремонт ноутбуков и компьютеров, настройка игровых приставок. В Балаково и Саратове",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={fonts.body3.className}>
        <ToastContainer />
        <Header />
        <Banner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
