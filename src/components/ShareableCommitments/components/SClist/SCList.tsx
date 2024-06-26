import React from "react";
import SC from "../SC/SC";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/SectionLabels";
import InstanceListContainer from "@/layout/InstanceListContainer";
import { sectionBodyContainertyles } from "@/styles/styles";
import { Section } from "@/utils/constant/Fields";
import { scSectionLabels } from "@/utils/constant/SectionLabels";
import { Box } from "@mui/material";

const SCList = () => {
  const ShareableCommitments = useSelector((state: RootState) => {
    return state.form.formState.shareableCommitments;
  });

  return (
    <Box sx={sectionBodyContainertyles.container}>
      <LabelContainer
        labels={scSectionLabels}
        section={Section.ShareableCommitments}
      />
      <InstanceListContainer>
        {ShareableCommitments.map((sc, i) => (
          <SC index={i} key={sc.id} instance={sc} />
        ))}
      </InstanceListContainer>
    </Box>
  );
};

export default SCList;
