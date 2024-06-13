import React from "react";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import SectionContainer from "@/layout/SectionContainer";
import { Section } from "@/utils/constant/Fields";
import { getSCNumber } from "@/store/slices/formSlice";
import NSCList from "./components/NSCList";

const NonShareableCommitment = () => {
  const numOfInstances = useSelector(getSCNumber);

  return (
    <SectionContainer
      headerText="Non-Shareable Commitments"
      addButtonLable="ADD Non-Shareable Commitment"
      numberOfInstances={numOfInstances}
      addInstanceDispatch={addInstance({
        section: Section.ShareableCommitments,
      })}
      children={<NSCList />}
    />
  );
};

export default NonShareableCommitment;
