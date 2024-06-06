import React from "react";
import SingleApplicant from "@/components/Applicants/components/SingleApplicant";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/LabelContainer";
import InstanceListContainer from "@/layout/InstanceListContainer";
import SectionBodyContainer from "@/layout/SectionBodyContainer/SectionBodyContainer";
import { SxPropsStyles } from "@/theme/globalStyle.js";
const applicantsLabels = [
  "",
  "Annual Base Income",
  "Annual Non-base Income",
  "Annual Bonus",
  "Monthly Basic Expense",
  "Monthly Other Expense",
  "Child Support/alimony",
  "Monthly Rent",
];

const ApplicantList = () => {
  const applicants = useSelector((state: RootState) => {
    return state.form.applicants;
  });

  return (
    <SectionBodyContainer>
      <LabelContainer labels={applicantsLabels} sectionName="applicants" />
      <InstanceListContainer>
        {applicants.map((applicant, i) => (
          <SingleApplicant index={i} key={applicant.id} applicant={applicant} />
        ))}
      </InstanceListContainer>
    </SectionBodyContainer>
  );
};
export default ApplicantList;
