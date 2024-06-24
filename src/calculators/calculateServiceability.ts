import { ILoanInterface } from "@/utils/interfaces/formInterfaces";

type RepaymentResults = {
  [key: string]: number;
};

// type ServiceabilityResult = {
//   totalServiceabilityRepayment: number;
//   repaymentResults: RepaymentResults;
//   totalLoanAmount: number;
// };

function calculateServiceabilityRepayment(
  loanDetails: ILoanInterface,
  interestRateBuffer: number = 3,
  floorRateA: number = 5.05,
  floorRateB: number = 6.19
): number {
  let totalServiceabilityRepayment = 0;
  //   let totalLoanAmount = 0;
  //   let repaymentResults: RepaymentResults = {};
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
  //   totalLoanAmount += loanAmount;

  return totalServiceabilityRepayment;
  //{
  //     totalServiceabilityRepayment,
  //     // repaymentResults,
  //     // totalLoanAmount,
  //   };
}

export default calculateServiceabilityRepayment;
