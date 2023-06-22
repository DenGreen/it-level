"use client";
import { btnType } from "./model";
import style from "./style.module.scss";

export const Btn = ({text, action}: btnType) => {

  return <button className={style.btn} onClick={() => action()}>{text}</button>;
};
