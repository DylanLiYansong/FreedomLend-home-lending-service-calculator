import React from "react";
import SCList from "./components/SClist";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import SectionContainer from "@/layout/SectionContainer";
import { Section } from "@/utils/constant/Fields";
import { getSCNumber } from "@/store/slices/formSlice";

const ShareableCommitments = () => {
  const numOfInstances = useSelector(getSCNumber);

  return (
    <SectionContainer
      headerText="Shareable Commitments"
      addButtonLable="ADD Shareable Commitment"
      numberOfInstances={numOfInstances}
      addInstanceDispatch={addInstance({
        section: Section.ShareableCommitments,
      })}
      children={<SCList />}
    />
  );
};

export default ShareableCommitments;
