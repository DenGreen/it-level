"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linkPropsType } from "./model";
import style from './style.module.scss'


export const LinkBase = ({ link }: linkPropsType) => {
  const pathname = usePathname();

  const isActive = (link: string) => {
    const pathSplit = pathname.split("/");
    const linkSplit = link.split("/");
    return pathSplit[1] === linkSplit[1];
  };

  return (
    <Link
      className={`${isActive(link.href) ? style.link : style.active}`}
      href={link.href}
    >
      {link.name}
    </Link>
  );
};
