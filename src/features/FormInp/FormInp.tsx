"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
import { Btn } from "@/shared";

export const FormInp = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const action = async () => {
    const response = await fetch("", {
      /* "https://secretapi.ru/lead?source=partner&idp=93202471-c428-7554-d47c9d19d66aa153" */
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        direction_id: 1,
        branch_id: 119,
        offer_id: 1,
        phones: [phone],
        is_pm: false,
        name: name,
      }),
    });

    setPhone("");
    setName("");

    if (response.status === 204) {
      console.log("Заявка принята");
    }
    /* 
    console.log({
      direction_id: 1,
      branch_id: 119,
      offer_id: 1,
      phones: [phone],
      is_pm: false,
      name: name,
    }); */
  };

  return (
    <div className={style.form}>
      <input
        type="name"
        value={name}
        placeholder="Имя"
        onChange={(e) => setName(e.target.value)}
        className={style.input}
      />
      <input
        type="tel"
        value={phone}
        placeholder="Телефон, начиная с 8"
        onChange={(e) => setPhone(e.target.value)}
        className={style.input}
      />
      <Btn text={"Отправить заявку"} action={action} />
    </div>
  );
};
