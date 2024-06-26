import React from "react";
import SingleApplicant from "@/components/Applicants/components/SingleApplicant";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/SectionLabels";
import InstanceListContainer from "@/layout/InstanceListContainer";
import { Section } from "@/utils/constant/Fields";
import { applicantsSectionLabels } from "@/utils/constant/SectionLabels";
import { sectionBodyContainertyles } from "@/styles/styles";
import { Box } from "@mui/material";
const ApplicantList = () => {
  const applicants = useSelector((state: RootState) => {
    return state.form.formState.applicants;
  });

  return (
    <Box sx={sectionBodyContainertyles.container}>
      <LabelContainer
        labels={applicantsSectionLabels}
        section={Section.Applicants}
      />
      <InstanceListContainer>
        {applicants.map((applicant, i) => (
          <SingleApplicant index={i} key={applicant.id} applicant={applicant} />
        ))}
      </InstanceListContainer>
    </Box>
  );
};
export default ApplicantList;
