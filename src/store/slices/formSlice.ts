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
import { Section } from "@/utils/constant/Fields";
import { initialServiceablityResult } from "@/utils/constant/bankData";
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
const initialFormState: IState = {
  [Section.Applicants]: [initialApplicant],
  [Section.Loans]: [initialLoan],
  [Section.ShareableCommitments]: [initialShareableCommitment],
  [Section.NonShareableCommitments]: [initialNonShareableCommitment],
};
const initialState = {
  formState: initialFormState,
  assessmentResult: initialServiceablityResult,
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
          if (state.formState.applicants.length < max_instance) {
            const newApplicant = { ...initialApplicant, id: uuidv4() };
            state.formState.applicants = [
              ...state.formState.applicants,
              newApplicant,
            ];
          }
          return;
        case Section.Loans:
          if (state.formState.loans.length < max_instance) {
            const newLoan = { ...initialLoan, id: uuidv4() };
            state.formState.loans = [...state.formState.loans, newLoan];
          }
          return;
        case Section.ShareableCommitments:
          if (state.formState.shareableCommitments.length < max_instance) {
            const newSC = { ...initialShareableCommitment, id: uuidv4() };
            state.formState.shareableCommitments = [
              ...state.formState.shareableCommitments,
              newSC,
            ];
          }
          return;
        case Section.NonShareableCommitments:
          if (state.formState.nonShareableCommitments.length < max_instance) {
            const newNSC = { ...initialNonShareableCommitment, id: uuidv4() };
            state.formState.nonShareableCommitments = [
              ...state.formState.nonShareableCommitments,
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
          const filter = state.formState.applicants.filter(
            (applicant) => applicant.id !== instanceId
          );
          state.formState.applicants = filter;
          return;
        case Section.Loans:
          const filteredLoans = state.formState.loans.filter(
            (loan) => loan.id !== instanceId
          );
          state.formState.loans = filteredLoans;
          return;
        case Section.ShareableCommitments:
          const filteredSCs = state.formState.shareableCommitments.filter(
            (sc) => sc.id !== instanceId
          );
          state.formState.shareableCommitments = filteredSCs;
          return;
        case Section.NonShareableCommitments:
          const filteredNSCs = state.formState.nonShareableCommitments.filter(
            (nsc) => nsc.id !== instanceId
          );
          state.formState.nonShareableCommitments = filteredNSCs;
          return;
        default:
          return state;
      }
    },
    updateInstance: (state, action) => {
      const { section, instanceId, newAttributes } = action.payload;
      switch (section) {
        case Section.Applicants:
          const oldInstanceIndex = state.formState.applicants.findIndex(
            (aplicant) => aplicant.id === instanceId
          );
          const oldInstance = state.formState.applicants[oldInstanceIndex];
          const newInstance = { ...oldInstance, newAttributes };
          state.formState.applicants[oldInstanceIndex] = newInstance;
          return;
        case Section.Loans:
          const oldLoanIndex = state.formState.loans.findIndex(
            (loan) => loan.id === instanceId
          );
          const oldLoan = state.formState.loans[oldLoanIndex];
          const newLoan = { ...oldLoan, newAttributes };
          state.formState.loans[oldLoanIndex] = newLoan;
          return;
        case Section.ShareableCommitments:
          const oldSCIndex = state.formState.applicants.findIndex(
            (sc) => sc.id === instanceId
          );
          const oldSC = state.formState.shareableCommitments[oldSCIndex];
          const newSC = { ...oldSC, newAttributes };
          state.formState.shareableCommitments[oldSCIndex] = newSC;
          return;
        case Section.NonShareableCommitments:
          const oldNSCIndex = state.formState.applicants.findIndex(
            (sc) => sc.id === instanceId
          );
          const oldNSC = state.formState.shareableCommitments[oldNSCIndex];
          const newNSC = { ...oldNSC, newAttributes };
          state.formState.shareableCommitments[oldNSCIndex] = newNSC;
          return;
        default:
          return state;
      }
    },
    calculate: (state) => {},
  },
});
export const getApplicantsNumber = (state: RootState) => {
  return state.form.formState.applicants.length;
};
export const getLoansNumber = (state: RootState) => {
  return state.form.formState.loans.length;
};
export const getSCNumber = (state: RootState) => {
  return state.form.formState.shareableCommitments.length;
};
export const getNSCNumber = (state: RootState) => {
  return state.form.formState.nonShareableCommitments.length;
};
export const getFormData = (state: RootState) => {
  return state.form.formState;
};
export const getAssessmentResult = (state: RootState) => {
  return state.form.assessmentResult;
};

// Action creators are generated for each case reducer function
export const {
  addInstance,
  deleteInstance,
  updateInstance,
  calculate,
} = formSlice.actions;
export default formSlice.reducer;
