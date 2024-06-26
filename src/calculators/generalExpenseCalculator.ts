import { IExpense } from "@/utils/interfaces/formInterfaces";

export function calculateExpenses({
  monthlyLivingExpenses,
  monthlyOtherExpenses,
  childSupport,
  monthlyRent,
}: IExpense): number {
  let totalExpenses = 0;
  // Calculate total expenses for this applicant
  const applicantTotalExpenses =
    monthlyLivingExpenses + monthlyOtherExpenses + childSupport + monthlyRent;
  totalExpenses += applicantTotalExpenses;
  return totalExpenses;
}
export const calculateTotalIncome = (applicantsExpense: IExpense[]): number => {
  return applicantsExpense.reduce(
    (accumulator, currentApplicantIncome, index) => {
      const currentValue = calculateExpenses(currentApplicantIncome);
      const totalExp = accumulator + currentValue;
      return totalExp;
    },
    0
  );
};
