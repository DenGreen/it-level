"use client";
import menu from "./menu.json"
import {LinkBase} from "@/shared";
import { linkType } from "./model";

export const Nav = () => {
  return (
    <nav>
      {menu.menu.map((value: linkType) => {
        return (
          <LinkBase
            link={value}
            key={value.name}
          />
        );
      })}
    </nav>
  );
};
