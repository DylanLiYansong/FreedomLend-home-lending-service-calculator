import { v4 as uuidv4 } from "uuid";

export interface IApplicantInterface {
  id: string;
  annualBaseIncome: number;
  annualNonBaseIncome: string;
  annualBonusIncome: string;
  monthlyLivingExpenses: string;
  monthlyOtherExpenses: string;
  childSupport: string;
  monthlyRent: string;
  index?: number;
}
export interface ILoanInterface {
  id: string;
  loanAmount: string;
  lendingInterestRate: string;
  commitmentTerm: string;
  interestOnlyTerm: string;
}
export interface IShareableCommitment {
  outstandingBalanceSC: string;
}
export const initialApplicantData: IApplicantInterface = {
  id: uuidv4(),
  annualBaseIncome: 0,
  annualNonBaseIncome: "",
  annualBonusIncome: "",
  monthlyLivingExpenses: "",
  monthlyOtherExpenses: "",
  childSupport: "",
  monthlyRent: "",
};
export const initialLoan: ILoanInterface = {
  id: uuidv4(),
  loanAmount: "",
  lendingInterestRate: "",
  commitmentTerm: "",
  interestOnlyTerm: "",
};

export type Section = "applicants" | "loans" | "shareable loans";
