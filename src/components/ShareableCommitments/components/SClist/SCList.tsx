import React from "react";
import SC from "../SC/SC";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/LabelContainer";
import InstanceListContainer from "@/layout/InstanceListContainer";
import SectionBodyContainer from "@/layout/SectionBodyContainer/SectionBodyContainer";
import { Section } from "@/utils/interfaces/FieldInterface";
import { scLabels } from "@/utils/interfaces/FieldInterface";

const SCList = () => {
  const ShareableCommitments = useSelector((state: RootState) => {
    return state.form.shareableCommitments;
  });

  return (
    <SectionBodyContainer>
      <LabelContainer
        labels={scLabels}
        sectionName={Section.ShareableCommitments}
      />
      <InstanceListContainer>
        {ShareableCommitments.map((sc, i) => (
          <SC index={i} key={sc.id} instance={sc} />
        ))}
      </InstanceListContainer>
    </SectionBodyContainer>
  );
};

export default SCList;
