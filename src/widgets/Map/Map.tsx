import React from "react";
import style from "./style.module.scss";
import { fonts } from "@/fonts/fonts";

export const Map = () => {
  return (
    <section className={style.box}>
      <h2 className={`${style.title} ${fonts.headingH3.className}`}>
        Города присутствия
      </h2>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af903dfabe6937c72a87228948c72ee5303b17755c5db7fd8613762829e2c002c&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      ></iframe>
    </section>
  );
};
