import React from "react";
import style from "./style.module.scss";
import { fonts } from "@/fonts/fonts";
import { FormInp } from "@/features";

export const Form = () => {
  return (
    <section className={style.box}>
      <div className={style.motivation}>
        <h2 className={style.title}>Вам нужна консультация специалиста ?</h2>
        <p className={`${fonts.body3.className} ${style.text}`}>
          Наши специалисты со стажем работы более 10 лет, проконсультируют Вас и
          решат вашу проблему в кратчайшие сроки. Все что вам нужно сделать, это
          оставить заявку в форме обратной связи, либо позвонить нам по номеру
          телефону:{" "}
          <a href="tel:+79061480132" className={style.tel}>
            {" "}
            8 (906) 148-01-32
          </a>
        </p>
      </div>
      <FormInp />
    </section>
  );
};
