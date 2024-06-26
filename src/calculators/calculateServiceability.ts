import { ILoanInterface } from "@/utils/interfaces/formInterfaces";

type RepaymentResults = {
  [key: string]: number;
};

function calculateLoanRepayment(
  loanDetails: ILoanInterface,
  interestRateBuffer: number = 3,
  floorRateA: number = 5.05,
  floorRateB: number = 6.19
): number {
  let totalServiceabilityRepayment = 0;
  const {
    lendingInterestRate,
    commitmentTerm,
    interestOnlyTerm,
    loanAmount,
  } = loanDetails;

  const SAR = Math.max(lendingInterestRate + interestRateBuffer, floorRateA);
  const rate = SAR / 1200;

  let numOfPeriod = (commitmentTerm - interestOnlyTerm) * 12;

  const serviceabilityRepayment =
    (rate * loanAmount) / (1 - Math.pow(1 + rate, -numOfPeriod));

  totalServiceabilityRepayment += serviceabilityRepayment;

  return totalServiceabilityRepayment;
}
export const calculateTotalRepayment = (loans: ILoanInterface[]): number => {
  return loans.reduce((accumulator, currentLoan, index) => {
    const currentValue = calculateLoanRepayment(currentLoan);
    const totalRepayment = accumulator + currentValue;
    return totalRepayment;
  }, 0);
};
export default calculateTotalRepayment;
