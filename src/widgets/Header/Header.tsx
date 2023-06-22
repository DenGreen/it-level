import style from './style.module.scss'
import Image from 'next/image';
import { fonts } from '@/fonts/fonts';
import logo from "@/img/logo.png";

export const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.headerBox}>
        <Image src={logo} alt='Логотип' />
        <div className={`${style.headerTel} ${fonts.headingH3.className}`}>
          Тел:
          <a href="tel:+79061480132" className={style.headerTel}> 8 (906) 148-01-32</a>
        </div>
      </section>
    </header>
  )
};

