import style from "./style.module.scss";
import Image from "next/image";
import { fonts } from "@/fonts/fonts";
import it from "@/img/IT1-desc.jpg";

export const Description = () => {
  return (
    <section className={style.box}>
      <Image
        src={it}
        className={style.img}
        alt={"Фото человека за ремоньом ноутбука"}
      />
      <p className={`${fonts.body3.className} ${style.text}`}>
        Компьютером сейчас владеет почти каждый человек. При возникновении
        непредвиденных проблем в работе устройства многие люди в растерянности
        начинают заниматься самостоятельным ремонтом. Это может только ухудшить
        ситуацию. В таких случаях лучше обратиться к нашим профессионалам,
        которые окажут качественную и быструю помощь, Вы всегда можете рассчитывать на нашу помощь. 
        Мы предоставляем услуги высокого качества по
        ремонту и исправлению проблем компьютерной техники, подключаем и настраиваем игровые приставки (XBOX, PSP, SONY PLAYSTATION). 
      </p>
    </section>
  );
};
