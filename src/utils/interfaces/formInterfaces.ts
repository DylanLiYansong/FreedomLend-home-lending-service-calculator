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
export interface IIncome {
  annualBaseIncome: number;
  annualNonBaseIncome: number;
  annualBonusIncome: number;
}
export interface IExpense {
  monthlyLivingExpenses: number;
  monthlyOtherExpenses: number;
  childSupport: number;
  monthlyRent: number;
}
export interface ILoanInterface {
  id: string;
  loanAmount: number;
  lendingInterestRate: number;
  commitmentTerm: number;
  interestOnlyTerm: number;
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
export interface IShareableCommitment {
  id: string;
  commitmentTypeSC: string;
  outstandingBalanceSC: number;
  currentLimitSC: number;
  currentInterestRate: number;
  remainingPITerm: number;
  customerDeclaredRepaymentSC: number;
}
export interface INonShareableCommitment {
  id: string;
  commitmentTypeNSC: string;
  outstandingBalanceNSC: number;
  currentLimitNSC: number;
  customerDeclaredRepaymentNSC: number;
}
export const initialNonShareableCommitment: INonShareableCommitment = {
  id: uuidv4(),
  commitmentTypeNSC: "",
  outstandingBalanceNSC: 0,
  currentLimitNSC: 0,
  customerDeclaredRepaymentNSC: 0,
};
export const initialShareableCommitment: IShareableCommitment = {
  id: uuidv4(),
  commitmentTypeSC: "",
  outstandingBalanceSC: 0,
  currentLimitSC: 0,
  currentInterestRate: 0,
  remainingPITerm: 0,
  customerDeclaredRepaymentSC: 0,
};
export type InitialInstanceType =
  | IApplicantInterface
  | ILoanInterface
  | IShareableCommitment
  | INonShareableCommitment;
