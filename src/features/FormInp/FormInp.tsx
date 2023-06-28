"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
import { Btn } from "@/shared";
import { toast } from "react-toastify";

export const FormInp = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [city, setСity] = useState("");

  const validate = (string: string) => {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(string);
  }

  const action = async () => {
    if (name === '') {
      toast.error("Введите имя", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const phoneCheck: boolean = validate(phone)

    if (!phoneCheck) {
      toast.error("Введите корректный номер телефона", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (city === "") {
      toast.error("Выберите город", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const response = await fetch(
      "https://secretapi.ru/lead?source=partner&idp=93202471-c428-7554-d47c9d19d66aa153",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          direction_id: 1,
          branch_id: Number(city),
          offer_id: 1,
          phones: [phone],
          is_pm: false,
          name: name,
        }),
      }
    );

    setPhone("");
    setName("");

    if (response.status === 204) {
      toast.success("Заявка принята", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
/*     console.log({
      direction_id: 1,
      branch_id: Number(city),
      offer_id: 1,
      phones: [phone],
      is_pm: false,
      name: name,
    });  */
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
      <select
        value={city}
        placeholder="Город"
        onChange={(e) => setСity(e.target.value)}
        className={style.input}
      >
        <option value="">-</option>
        <option value="119">Балаково</option>
        <option value="12">Саратов</option>
      </select>
      <Btn text={"Отправить заявку"} action={action} />
    </div>
  );
};
