import { Rubik } from "next/font/google";
import { Inter } from "next/font/google";

const body3 = Rubik({ subsets: ["cyrillic"], weight: ["400"] })
const headingH3 = Rubik({ subsets: ["cyrillic"], weight: ["600"] })
const cap1 = Inter({ subsets: ["cyrillic"], weight: ["600"] })

export const fonts = {
  body3: body3,
  headingH3: headingH3,
  cap1: cap1,
};

