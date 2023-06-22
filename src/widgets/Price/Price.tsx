"use client";
import React, { useState } from "react";
import price from "./price.json";
import style from "./style.module.scss";
import { fonts } from "@/fonts/fonts";
import { Btn } from "@/shared";

export const Price = () => {
  const [active, setActive] = useState<boolean>(false);

  const action = () => {
    return setActive(active ? false : true);
  };

  return (
    <section className={style.box}>
      <div>
        <h2 className={style.title}>Прайс</h2>
        <ul className={`${style.list} ${active && style.listActive}`}>
          {price.price.map((value, i) => {
            return (
              <li className={`${style.item} ${fonts.body3.className}`} key={i}>
                <span>{value.name}</span>
                <span>{value.price} руб.</span>
              </li>
            );
          })}
        </ul>
        <Btn text={active ? "Свернуть" : "Развернуть"} action={action} />
      </div>
    </section>
  );
};
