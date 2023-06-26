import Image from "next/image";
import style from "./style.module.scss";
import { fonts } from "@/fonts/fonts";
import logo from "@/img/logo.png";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.box}>
        <Image src={logo} alt="Логотип" />
        <div className={`${fonts.body3.className} ${style.text}`}>
          Прием обращений - круглосуточно! <br /> Выезд мастера с 10:00 до 22:00{" "}
          <br />
          Работаем в черте города + до 40 км от границы города - бесплатно.
        </div>
        <div className={`${fonts.body3.className} ${style.text}`}>
          Информация на данном ресурсе не является публичной офертой.
          <br />
          ИНН 643968686347 / Малышев Денис Вячеславович / ул.Титова 35
          <br />
          <a
            href={"./doc/polit.pdf"}
            className={`${fonts.body3.className} ${style.link}`}
            rel="noreferrer"
            target="_blank"
          >
            Политика конфиденциальности
          </a>
        </div>
      </section>
    </footer>
  );
};
