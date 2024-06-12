import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import {
  IApplicantInterface,
  ILoanInterface,
  IShareableCommitment,
  INonShareableCommitment,
  initialShareableCommitment,
  initialNonShareableCommitment,
  initialApplicant,
  initialLoan,
} from "@/utils/interfaces/formInterfaces";
import { Section } from "@/utils/interfaces/FieldInterface";

const MAX_INSTANCES: Record<Section, number> = {
  [Section.Applicants]: 2,
  [Section.Loans]: 4,
  [Section.ShareableCommitments]: 4,
  [Section.NonShareableCommitments]: 4,
};

interface IState {
  [Section.Applicants]: IApplicantInterface[];
  [Section.Loans]: ILoanInterface[];
  [Section.ShareableCommitments]: IShareableCommitment[];
  [Section.NonShareableCommitments]: INonShareableCommitment[];
}

// Initialize the state
const initialState: IState = {
  [Section.Applicants]: [initialApplicant],
  [Section.Loans]: [initialLoan],
  [Section.ShareableCommitments]: [initialShareableCommitment],
  [Section.NonShareableCommitments]: [initialNonShareableCommitment],
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInstance: (state, action: PayloadAction<{ section: Section }>) => {
      const { section } = action.payload;
      const max_instance = MAX_INSTANCES[section as Section];
      switch (section) {
        case Section.Applicants:
          if (state.applicants.length < max_instance) {
            const newApplicant = { ...initialApplicant, id: uuidv4() };
            state.applicants = [...state.applicants, newApplicant];
          }
          return;
        case Section.Loans:
          if (state.loans.length < max_instance) {
            const newLoan = { ...initialLoan, id: uuidv4() };
            state.loans = [...state.loans, newLoan];
          }
          return;
        case Section.ShareableCommitments:
          if (state.shareableCommitments.length < max_instance) {
            const newSC = { ...initialShareableCommitment, id: uuidv4() };
            state.shareableCommitments = [...state.shareableCommitments, newSC];
          }
          return;
        case Section.NonShareableCommitments:
          if (state.nonShareableCommitments.length < max_instance) {
            const newNSC = { ...initialNonShareableCommitment, id: uuidv4() };
            state.nonShareableCommitments = [
              ...state.nonShareableCommitments,
              newNSC,
            ];
          }
          return;
        default:
          return state;
      }
    },
    deleteInstance: (
      state,
      action: PayloadAction<{ section: Section; instanceId: string }>
    ) => {
      const { section, instanceId } = action.payload;
      switch (section) {
        case Section.Applicants:
          const filter = state.applicants.filter(
            (applicant) => applicant.id !== instanceId
          );
          state.applicants = filter;
          return;
        case Section.Loans:
          const filteredLoans = state.loans.filter(
            (loan) => loan.id !== instanceId
          );
          state.loans = filteredLoans;
          return;
        case Section.ShareableCommitments:
          const filteredSCs = state.shareableCommitments.filter(
            (sc) => sc.id !== instanceId
          );
          state.shareableCommitments = filteredSCs;
          return;
        case Section.NonShareableCommitments:
          const filteredNSCs = state.nonShareableCommitments.filter(
            (nsc) => nsc.id !== instanceId
          );
          state.nonShareableCommitments = filteredNSCs;
          return;
        default:
          return state;
      }
    },
    updateInstance: (state, action) => {
      const { section, instanceId, newAttributes } = action.payload;
      switch (section) {
        case Section.Applicants:
          const oldInstanceIndex = state.applicants.findIndex(
            (aplicant) => aplicant.id === instanceId
          );
          const oldInstance = state.applicants[oldInstanceIndex];
          const newInstance = { ...oldInstance, newAttributes };
          state.applicants[oldInstanceIndex] = newInstance;
          return;
        case Section.Loans:
          const oldLoanIndex = state.loans.findIndex(
            (laon) => laon.id === instanceId
          );
          const oldLoan = state.loans[oldLoanIndex];
          const newLoan = { ...oldLoan, newAttributes };
          state.loans[oldLoanIndex] = newLoan;
          return;
        case Section.ShareableCommitments:
          const oldSCIndex = state.applicants.findIndex(
            (sc) => sc.id === instanceId
          );
          const oldSC = state.shareableCommitments[oldSCIndex];
          const newSC = { ...oldSC, newAttributes };
          state.shareableCommitments[oldSCIndex] = newSC;
          return;
        case Section.NonShareableCommitments:
          const oldNSCIndex = state.applicants.findIndex(
            (sc) => sc.id === instanceId
          );
          const oldNSC = state.shareableCommitments[oldNSCIndex];
          const newNSC = { ...oldNSC, newAttributes };
          state.shareableCommitments[oldNSCIndex] = newNSC;
          return;
        default:
          return state;
      }
    },
  },
});
export const getApplicantsNumber = (state: RootState) => {
  return state.form.applicants.length;
};
export const getLoansNumber = (state: RootState) => {
  return state.form.loans.length;
};
export const getSCNumber = (state: RootState) => {
  return state.form.shareableCommitments.length;
};
export const getNSCNumber = (state: RootState) => {
  return state.form.nonShareableCommitments.length;
};

// Action creators are generated for each case reducer function
export const {
  addInstance,
  deleteInstance,
  updateInstance,
} = formSlice.actions;
export default formSlice.reducer;
