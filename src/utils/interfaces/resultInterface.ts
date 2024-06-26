export interface ServiceablityResult {
  lender: IBank;
  monthlySurplus: number;
  monthlyRepay: number;
  eligible: boolean;
}
export interface IBank {
  lenderId: number;
  lenderName: string;
  image: string;
  interestRate: string;
}
