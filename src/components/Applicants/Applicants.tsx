import React from "react";
import ApplicantList from "./components/ApplicantList";
import { useSelector } from "react-redux";
import { addApplicant } from "@/store/slices/formSlice";
import { RootState } from "@/store/store";
import SectionContainer from "@/layout/SectionContainer";
const Applicants = () => {
  const numOfApplicants = useSelector(
    (state: RootState) => state.form.applicants.length
  );

  return (
    <SectionContainer
      headerText="Applicants"
      addButtonLable="ADD APPLICANT"
      numberOfInstances={numOfApplicants}
      addInstanceDispatch={addApplicant()}
      children={<ApplicantList />}
    />
  );
};

export default Applicants;
