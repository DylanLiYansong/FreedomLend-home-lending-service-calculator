import { IIncome } from "@/utils/interfaces/formInterfaces";
interface TaxBracket {
  threshold: number; // Tax threshold for this bracket
  rate: number; // Tax rate for income within this bracket
}
interface IIncomeCalculatorOutput {
  taxableIncome: number;
  netIncome: number;
  taxPayable: number;
  applicantMonthlyNetIncome: number;
}
// Define tax brackets and rates (2023-2024 rates for example)
const taxBrackets: TaxBracket[] = [
  { threshold: 18200, rate: 0 },
  { threshold: 45000, rate: 0.19 },
  { threshold: 120000, rate: 0.325 },
  { threshold: 180000, rate: 0.37 },
  { threshold: Infinity, rate: 0.45 },
];

export function calculateIncome({
  annualBaseIncome,
  annualNonBaseIncome,
  annualBonusIncome,
}: IIncome): IIncomeCalculatorOutput {
  // Calculate total income
  const totalIncome =
    annualBaseIncome + annualNonBaseIncome + annualBonusIncome;

  // Calculate taxable income
  let taxableIncome = totalIncome;

  // Apply tax brackets to calculate tax payable
  let taxPayable = 0;
  let previousThreshold = 0;

  for (const bracket of taxBrackets) {
    if (taxableIncome <= 0) {
      break; // No more tax to calculate
    }

    const incomeInBracket = Math.max(0, taxableIncome - previousThreshold);
    const taxableInBracket = Math.min(
      incomeInBracket,
      bracket.threshold - previousThreshold
    );

    taxPayable += taxableInBracket * bracket.rate;
    previousThreshold = bracket.threshold;
  }

  // Calculate Medicare Levy
  const medicareLevy = totalIncome * 0.02; // 2% of total income

  // Calculate net income
  const netIncome = totalIncome - taxPayable - medicareLevy;
  const applicantMonthlyNetIncome = netIncome / 12;

  // Return results
  return { taxableIncome, netIncome, taxPayable, applicantMonthlyNetIncome };
}
