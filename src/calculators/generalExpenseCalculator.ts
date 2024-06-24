import { IExpense } from "@/utils/interfaces/formInterfaces";

export function calculateExpenses({
  monthlyLivingExpenses,
  monthlyOtherExpenses,
  childSupport,
  monthlyRent,
}: IExpense) {
  let totalExpenses = 0;
  // Calculate total expenses for this applicant
  const applicantTotalExpenses =
    monthlyLivingExpenses + monthlyOtherExpenses + childSupport + monthlyRent;
  totalExpenses += applicantTotalExpenses;
  return { totalExpenses };
}
