import style from "./style.module.scss";
import stages from "./stages.json";
import Image from "next/image";
import { fonts } from "@/fonts/fonts";
import bac from "@/img/bac2.png";
import { Btn } from "@/shared";
import { Card } from "@/features";

export const Stages = () => {
  return (
    <section className={style.box}>
      <div>
        <h2 className={`${style.title} ${fonts.headingH3.className}`}>Этапы работ</h2>
        <div className={style.cards}>
          {stages.stages.map((value) => {
            return <Card text={value.text} num={value.num} key={value.num} />;
          })}
        </div>
      </div>
    </section>
  );
};
