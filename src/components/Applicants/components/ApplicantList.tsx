import React from "react";
import SingleApplicant from "@/components/Applicants/components/SingleApplicant";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/LabelContainer";
import InstanceListContainer from "@/layout/InstanceListContainer";
import SectionBodyContainer from "@/layout/SectionBodyContainer/SectionBodyContainer";
import { SectionPlus } from "@/utils/interfaces/FieldInterface";
// import { applicantsLabels } from "@/utils/labels";
import { applicantsLabels } from "@/utils/interfaces/FieldInterface";
const ApplicantList = () => {
  const applicants = useSelector((state: RootState) => {
    return state.form.applicants;
  });

  return (
    <SectionBodyContainer>
      <LabelContainer
        labels={applicantsLabels}
        sectionName={SectionPlus.Applicants}
      />
      <InstanceListContainer>
        {applicants.map((applicant, i) => (
          <SingleApplicant index={i} key={applicant.id} applicant={applicant} />
        ))}
      </InstanceListContainer>
    </SectionBodyContainer>
  );
};
export default ApplicantList;
