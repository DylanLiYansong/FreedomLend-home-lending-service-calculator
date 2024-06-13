import { IOption } from "@/layout/Selector/Selector";

export const shareableCommitmentTypes: IOption[] = [
  {
    value: "mortgageOO",
    label: "Mortgage - OO",
  },
  {
    value: "mortgageIPL",
    label: "Mortgage - IPL",
  },
  {
    value: "creditCard",
    label: "Credit card",
  },
  {
    value: "hirePurchase/Leasing",
    label: "Hire purchase/leasing",
  },
  {
    value: "personalLoan",
    label: "Personal loan",
  },
  {
    value: "loc(secured)",
    label: "Line of credit (secured)",
  },
  {
    value: "loc(unsecured)",
    label: "Line of credit (unsecured)",
  },
  {
    value: "marginLoan",
    label: "Margin loan",
  },
  {
    value: "overdraft",
    label: "Overdraft",
  },
  {
    value: "storeAccount",
    label: "Store account",
  },
  {
    value: "other",
    label: "Other",
  },
];
export const nonShareableCommitmentTypes: IOption[] = [
  {
    value: "62day",
    label: "62 day buy now pay later",
  },
  {
    value: "buyNowPayLaterFixed",
    label: "Buy now pay later (fixed term)",
  },
  {
    value: "buyNowPayLaterRevolving",
    label: "Buy now pay later (revolving term)",
  },
  {
    value: "tax/centrelinkDebt",
    label: "Tax/Centrelink debt",
  },
];

export const applicantsSectionLabels = [
  "Annual base income",
  "Annual non-base income",
  "Annual bonus income",
  "Monthly living expenses",
  "Monthly other expenses",
  "Child support/alimony",
  "Monthly rent",
];
export const loansSectionLabels = [
  "Loan amount",
  "Lending interest rate (%)",
  "Term (years)",
  "Interest only terms (years)",
];
export const scSectionLabels = [
  "Commitment Type",
  "Outstanding Balance",
  "Current Limit",
  "Current Interest Rate (%)",
  "Remaining P & I Term (months)",
  "Customer Declared Repayment",
];
export const nscSectionLabels = [
  "Commitment Type",
  "Outstanding Balance",
  "Current Limit",
  "Customer Declared Repayment",
];
