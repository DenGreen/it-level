import style from "./style.module.scss";
import Image from "next/image";
import { fonts } from "@/fonts/fonts";
import bac from "@/img/bac2.png";
import { Btn } from "@/shared";

export const Banner = () => {
  return (
    <section className={style.banner}>
      <Image src={bac} className={style.img} alt={""} />
      <div className={style.bannerBox}>
        <span className={`${fonts.cap1.className} ${style.badge}`}>КОМПАНИЯ ITLEVEL</span>
        <h1 className={`${fonts.headingH3.className} ${style.title}`}>Ремонт компьютеров и ноутбуков</h1>
        <ul className={style.list}>
          <li className={style.item}>Бесплатный выезд мастера</li>
          <li className={style.item}>Бесплатная диагностика на дому</li>
          <li className={style.item}>Гарантия на ремонт до 3-х лет</li>
          <li className={style.item}>Скидки до 15%</li>
        </ul>
        <Btn text={"Отправить заявку"} action={null} />
      </div>
    </section>
  );
};
