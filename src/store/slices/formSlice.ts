import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import {
  IApplicantInterface,
  ILoanInterface,
} from "@/utils/interfaces/formInterfaces";
const MAX_APPLICANTS = 2;
const MAX_COMMITMENTS = 4;

interface FormInterface {
  applicants: IApplicantInterface[];
  loans: ILoanInterface[];
}
const initialApplicantData: IApplicantInterface = {
  id: uuidv4(),
  annualBaseIncome: 0,
  annualNonBaseIncome: "",
  annualBonusIncome: "",
  monthlyLivingExpenses: "",
  monthlyOtherExpenses: "",
  childSupport: "",
  monthlyRent: "",
};
const initialLoan: ILoanInterface = {
  id: uuidv4(),
  loanAmount: "",
  lendingInterestRate: "",
  commitmentTerm: "",
  interestOnlyTerm: "",
};
// const initialNonShareableCommitment;
const initialState: FormInterface = {
  applicants: [initialApplicantData],
  loans: [initialLoan],
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addApplicant: (state) => {
      if (state.applicants.length < MAX_APPLICANTS) {
        const newApplicant = { ...initialApplicantData, id: uuidv4() };
        const newApplicants = [...state.applicants, newApplicant];
        state.applicants = newApplicants;
      }
    },
    deleteApplicant: (state, action) => {
      const { applicantId } = action.payload;
      const filter = state.applicants.filter(
        (applicant) => applicant.id !== applicantId
      );
      state.applicants = filter;
    },
    updateApplicant: (state, action) => {
      const { newAttributes } = action.payload;
      const oldApplicantIndex = state.applicants.findIndex(
        (aplicant) => aplicant.id === newAttributes.id
      );
      const oldApplicant = state.applicants[oldApplicantIndex];
      const newApplicant = { ...oldApplicant, newAttributes };
      state.applicants[oldApplicantIndex] = newApplicant;
      const attributeName = "annualBaseIncome";
      state.applicants[0][attributeName] = 5454;
      console.log(state.applicants[0].annualBaseIncome);
    },
    addLoan: (state) => {
      if (state.loans.length < MAX_COMMITMENTS) {
        const newLoan = { ...initialLoan, id: uuidv4() };
        const newLoans = [...state.loans, newLoan];
        state.loans = newLoans;
      }
    },
    deleteLoan: (state, action) => {
      const { loanId } = action.payload;
      console.log(action.payload);
      const filteredLoans = state.loans.filter((loan) => loan.id !== loanId);
      state.loans = filteredLoans;
    },
    updateLoan: (state, action) => {
      const { newAttributes } = action.payload;
      const oldLoanIndex = state.loans.findIndex(
        (loan) => loan.id === newAttributes.id
      );
      const oldLoan = state.loans[oldLoanIndex];
      const newLoan = { ...oldLoan, newAttributes };
      state.loans[oldLoanIndex] = newLoan;
    },
    addNonShareableCommitment: (state) => {
      if (state.loans.length < MAX_COMMITMENTS) {
        const newLoan = { ...initialLoan, id: uuidv4() };
        const newLoans = [...state.loans, newLoan];
        state.loans = newLoans;
      }
    },
    deleteNonShareableCommitment: (state, action) => {
      const { loanId } = action.payload;
      console.log(action.payload);
      const filteredLoans = state.loans.filter((loan) => loan.id !== loanId);
      state.loans = filteredLoans;
    },
    updateNonShareableCommitment: (state, action) => {
      const { newAttributes } = action.payload;
      const oldLoanIndex = state.loans.findIndex(
        (loan) => loan.id === newAttributes.id
      );
      const oldLoan = state.loans[oldLoanIndex];
      const newLoan = { ...oldLoan, newAttributes };
      state.loans[oldLoanIndex] = newLoan;
    },
  },
});
export const getApplicantsNumber = (state: RootState) => {
  return state.form.applicants.length;
};
export const getLoansNumber = (state: RootState) => {
  return state.form.loans.length;
};
// Action creators are generated for each case reducer function
export const {
  addApplicant,
  deleteApplicant,
  updateApplicant,
  addLoan,
  deleteLoan,
} = formSlice.actions;
export default formSlice.reducer;
