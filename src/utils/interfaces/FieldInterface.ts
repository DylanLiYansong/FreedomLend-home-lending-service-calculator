export type inputType = "amount" | "quantity" | "rate";
export default interface FieldInterface {
  id: string;
  label: string;
  type: inputType;
}
export const incomeFields: FieldInterface[] = [
  {
    id: "annualBaseIncome",
    label: "Base Income",
    type: "amount",
  },
  {
    id: "annualNonBaseIncome",
    label: "Non-base Income",
    type: "amount",
  },
  {
    id: "annualBonusIncome",
    label: "Bonus",
    type: "amount",
  },
];
export const expenseFields: FieldInterface[] = [
  {
    id: "monthlyLivingExpenses",
    label: "Basic Expense",
    type: "amount",
  },
  {
    id: "monthlyOtherExpenses",
    label: "Other expenses",
    type: "amount",
  },
  {
    id: "childSupport",
    label: "Child support",
    type: "amount",
  },
  {
    id: "monthlyRent",
    label: "Rent",
    type: "amount",
  },
];
export const loansFields: FieldInterface[] = [
  {
    id: "loanAmount",
    label: "Amount",
    type: "amount",
  },
  {
    id: "lendingInterestRate",
    label: "Interest rate",
    type: "rate",
  },
  {
    id: "commitmentTerm",
    label: "Term",
    type: "quantity",
  },
  {
    id: "interestOnlyTerm",
    label: "Interest only term",
    type: "quantity",
  },
];
