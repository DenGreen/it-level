import style from "./style.module.scss";
import Image from "next/image";
import { fonts } from "@/fonts/fonts";
import it from "@/img/IT1-desc.jpg"

export const Description = () => {
  return (
    <section className={style.box}>
      <Image src={it} className={style.img} alt={"Фото человека за ремоньом ноутбука"} />
      <p className={`${fonts.body3.className} ${style.text}`}>
        Компьютеры, ноутбуки - техника современная и не застрахована от поломок,
        еслы ваше устройство вышло из строя, вы всегда можете рассчитывать на
        нашу помощь. К техники нужен своевременный и комплексный подход, который
        могут обеспечить наши компетентные мастера. Мы предоставляем услуги
        высокого качества по ремонту и исправлению проблем компьютерной техники
        (ноутбуков, персональных компьютеров), наш опыт более 10 лет.
      </p>
    </section>
  );
};
