import { IBank, ServiceablityResult } from "../interfaces/resultInterface";
import westpac from "@/assets/westpac.png";
import cba from "@/assets/cba.png";
import anz from "@/assets/anz.png";
import bankofsydney from "@/assets/bankofsydney.png";
import liberty from "@/assets/liberty.png";
import macquarie from "@/assets/macquarie.png";
import suncorp from "@/assets/suncorp.png";
import nab from "@/assets/nab.png";

const bankData: IBank[] = [
  {
    lenderId: 1,
    lenderName: "westpac",
    image: westpac,
    interestRate: "6.14%",
  },
  {
    lenderId: 2,
    lenderName: "commonwealth bank",
    image: cba,
    interestRate: "6.54%",
  },

  {
    lenderId: 3,
    lenderName: "anz",
    image: anz,
    interestRate: "6.54%",
  },
  {
    lenderId: 4,
    lenderName: "bankofsydney",
    image: bankofsydney,
    interestRate: "6.54%",
  },
  {
    lenderId: 5,
    lenderName: "liberty",
    image: liberty,
    interestRate: "6.54%",
  },
  {
    lenderId: 6,
    lenderName: "macquarie",
    image: macquarie,
    interestRate: "6.54%",
  },
  {
    lenderId: 7,
    lenderName: "suncorp",
    image: suncorp,
    interestRate: "6.54%",
  },
  {
    lenderId: 8,
    lenderName: "nab",
    image: nab,
    interestRate: "6.54%",
  },
];
export const initialServiceablityResult = bankData.map(
  (bank): ServiceablityResult => {
    return {
      lender: bank,
      monthlySurplus: 0,
      monthlyRepay: 0,
      eligible: false,
    };
  }
);
