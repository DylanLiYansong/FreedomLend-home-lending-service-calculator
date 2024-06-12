import React from "react";
import ApplicantList from "./components/ApplicantList";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import { RootState } from "@/store/store";
import SectionContainer from "@/layout/SectionContainer";
import { Section } from "@/utils/interfaces/FieldInterface";
const Applicants = () => {
  const numOfApplicants = useSelector(
    (state: RootState) => state.form.applicants.length
  );

  return (
    <SectionContainer
      headerText="Applicants"
      addButtonLable="ADD APPLICANT"
      numberOfInstances={numOfApplicants}
      addInstanceDispatch={addInstance({ section: Section.Applicants })}
      children={<ApplicantList />}
    />
  );
};

export default Applicants;
