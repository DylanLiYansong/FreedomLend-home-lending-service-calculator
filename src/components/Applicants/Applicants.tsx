import React from "react";
import ApplicantList from "./components/ApplicantList";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import SectionContainer from "@/layout/SectionContainer";
import { Section } from "@/utils/interfaces/FieldInterface";
import { getApplicantsNumber } from "@/store/slices/formSlice";
const Applicants = () => {
  const numOfInstances = useSelector(getApplicantsNumber);
  return (
    <SectionContainer
      headerText="Applicants"
      addButtonLable="ADD APPLICANT"
      numberOfInstances={numOfInstances}
      addInstanceDispatch={addInstance({ section: Section.Applicants })}
      children={<ApplicantList />}
    />
  );
};

export default Applicants;
