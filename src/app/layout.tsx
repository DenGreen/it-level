/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import "./scss/reset.scss";
import { fonts } from "@/fonts/fonts";
import { Footer, Header } from "@/widgets";
import { Banner } from "@/widgets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script'
import styleYa from "./scss/ya.module.scss"

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
      <Script src="https://it-level.pro/yametr.js" />
      <body className={fonts.body3.className}>
        <img src="https://mc.yandex.ru/watch/94109496" className={styleYa.ya} alt="" />
        <ToastContainer />
        <Header />
        <Banner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
