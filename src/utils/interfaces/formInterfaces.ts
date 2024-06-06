import { v4 as uuidv4 } from "uuid";
export interface IApplicantInterface {
  id: string;
  annualBaseIncome: number;
  annualNonBaseIncome: number;
  annualBonusIncome: number;
  monthlyLivingExpenses: number;
  monthlyOtherExpenses: number;
  childSupport: number;
  monthlyRent: number;
  index?: number;
}
export interface ILoanInterface {
  id: string;
  loanAmount: number;
  lendingInterestRate: number;
  commitmentTerm: number;
  interestOnlyTerm: number;
}
export interface IShareableCommitment {
  outstandingBalanceSC: string;
}
export const initialApplicant: IApplicantInterface = {
  id: uuidv4(),
  annualBaseIncome: 0,
  annualNonBaseIncome: 0,
  annualBonusIncome: 0,
  monthlyLivingExpenses: 0,
  monthlyOtherExpenses: 0,
  childSupport: 0,
  monthlyRent: 0,
};
export const initialLoan: ILoanInterface = {
  id: uuidv4(),
  loanAmount: 0,
  lendingInterestRate: 0,
  commitmentTerm: 0,
  interestOnlyTerm: 0,
};
