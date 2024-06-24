export type inputType = "amount" | "quantity" | "rate" | "select";

export enum Section {
  Applicants = "applicants",
  Loans = "loans",
  ShareableCommitments = "shareableCommitments",
  NonShareableCommitments = "nonShareableCommitments",
}
export const SectionNames: Record<string, string> = {
  [Section.Applicants]: "Applicant",
  [Section.Loans]: "Proposed Loan",
  [Section.ShareableCommitments]: "Shareable Commitment",
  [Section.NonShareableCommitments]: "NonShareable Commitment",
};
export type FlexDirection = "column" | "row";

export interface FieldInterface {
  id: string;
  label: string;
  type: inputType;
  sectionId?: number;
  instanceId?: string;
}
export const INPUT_FIELD_WIDTH = "240px";

export const applicantsFields: FieldInterface[] = [
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

export const ShareableCommitmentFields: FieldInterface[] = [
  {
    id: "outstandingBalanceSC",
    label: "Outstanding Balance",
    type: "amount",
  },
  {
    id: "currentLimitSC",
    label: "Limit",
    type: "amount",
  },
  {
    id: "currentInterestRate",
    label: "Interest Rate",
    type: "rate",
  },
  {
    id: "remainingPITerm",
    label: "Remaining Term",
    type: "quantity",
  },
  {
    id: "customerDeclaredRepaymentSC",
    label: "Repayment",
    type: "amount",
  },
];
const NonShareableCommitmentFields: FieldInterface[] = [
  {
    id: "outstandingBalanceNSC",
    label: "Outstanding Balance",
    type: "amount",
  },
  {
    id: "currentLimitNSC",
    label: "Limit",
    type: "amount",
  },

  {
    id: "customerDeclaredRepaymentNSC",
    label: "Repayment",
    type: "amount",
  },
];

export const NonshareableCommitmentLabels = [
  ...NonShareableCommitmentFields.map((field) => field.label),
];

const getSimpleFields = function getSimpleFields({
  section,
}: {
  section: Section;
}): FieldInterface[] {
  switch (section) {
    case Section.Applicants:
      return applicantsFields;

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
