export type inputType = "amount" | "quantity" | "rate" | "select";
export enum Section {
  ApplicantsIncome = "applicantsIncomes",
  ApplicantsExpense = "applicantsExpenses",
  Applicants = "applicants",
  Loans = "loans",
  ShareableCommitments = "ShareableCommitments",
  NonShareableCommitments = "NonShareableCommitments",
}
export const SectionNames: Record<string, string> = {
  [Section.ApplicantsIncome]: "Applicant",
  [Section.ApplicantsExpense]: "Applicant",
  [Section.Loans]: "Loan",
  [Section.ShareableCommitments]: "Shareable Commitment",
  [Section.NonShareableCommitments]: "NonShareable Commitment",
};

export default interface FieldInterface {
  id: string;
  label: string;
  type: inputType;
  sectionId?: number;
  instanceId?: string;
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

export const ShareableCommitmentFields: FieldInterface[] = [
  {
    id: "commitmentTypeSC",
    label: "Commitment Type",
    type: "select",
  },
  {
    id: "outstandingBalanceSC",
    label: "Outstanding Balance",
    type: "amount",
  },
  {
    id: "currentLimitSC",
    label: ">Current Limit",
    type: "amount",
  },
  {
    id: "currentInterestRate",
    label: "Current Interest Rate (%)",
    type: "rate",
  },
  {
    id: "remainingPITerm",
    label: "Remaining P & I Term (months)",
    type: "quantity",
  },
  {
    id: "customerDeclaredRepaymentSC",
    label: "Customer Declared Repayment",
    type: "amount",
  },
];
const NonShareableCommitmentFields: FieldInterface[] = [
  {
    id: "commitmentTypeNSC",
    label: "Commitment Type",
    type: "select",
  },
  {
    id: "outstandingBalanceNSC",
    label: "Outstanding Balance",
    type: "amount",
  },
  {
    id: "currentLimitNSC",
    label: ">Current Limit",
    type: "amount",
  },

  {
    id: "customerDeclaredRepaymentNSC",
    label: "Customer Declared Repayment",
    type: "amount",
  },
];

const getSimpleFields = function getSimpleFields({
  section,
}: {
  section: Section;
}): FieldInterface[] {
  switch (section) {
    case Section.ApplicantsIncome:
      return incomeFields;
    case Section.ApplicantsExpense:
      return expenseFields;
    case Section.Loans:
      return loansFields;
    case Section.ShareableCommitments:
      return ShareableCommitmentFields;
    case Section.NonShareableCommitments:
      return NonShareableCommitmentFields;
    default:
      return [];
  }
};

export const getFields = function ({
  section,
  instanceId,
}: {
  section: Section;
  instanceId: string;
}): FieldInterface[] {
  const fields = getSimpleFields({ section });
  return fields.map((field) => {
    const newid = `${field.id}_${instanceId}`;
    return { ...field, section, id: newid };
  });
};
