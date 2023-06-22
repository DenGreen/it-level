import React from "react";
import style from "./style.module.scss"
import { cardType } from "./model";
import { fonts } from "@/fonts/fonts";

export const Card = ({ text, num }: cardType) => {
  return (
    <article className={style.box}>
      <span className={`${style.num} ${fonts.headingH3.className}`}>{num}</span>
      <p className={`${style.text} ${fonts.body3.className}`}>{text}</p>
    </article>
  );
};
