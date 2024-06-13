import React from "react";
import NSC from "../NSC/NSC";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/SectionLabels";
import InstanceListContainer from "@/layout/InstanceListContainer";
import { sectionBodyContainertyles } from "@/styles/styles";
import { Section } from "@/utils/constant/Fields";
import { nscSectionLabels } from "@/utils/constant/SectionLabels";
import { Box } from "@mui/material";

const NSCList = () => {
  const nonShareableCommitments = useSelector((state: RootState) => {
    return state.form.nonShareableCommitments;
  });

  return (
    <Box sx={sectionBodyContainertyles.container}>
      <LabelContainer
        labels={nscSectionLabels}
        section={Section.NonShareableCommitments}
      />
      <InstanceListContainer>
        {nonShareableCommitments.map((nsc, i) => (
          <NSC index={i} key={nsc.id} instance={nsc} />
        ))}
      </InstanceListContainer>
    </Box>
  );
};

export default NSCList;
