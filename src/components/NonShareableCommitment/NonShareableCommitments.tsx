import React from "react";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import SectionContainer from "@/layout/SectionContainer";
import { Section } from "@/utils/constant/Fields";
import { getNSCNumber } from "@/store/slices/formSlice";
import NSCList from "./components/NSCList";

const NonShareableCommitment = () => {
  const numOfInstances = useSelector(getNSCNumber);

  return (
    <SectionContainer
      headerText="Non-Shareable Commitments"
      addButtonLable="ADD Non-Shareable Commitment"
      numberOfInstances={numOfInstances}
      addInstanceDispatch={addInstance({
        section: Section.NonShareableCommitments,
      })}
      children={<NSCList />}
    />
  );
};

export default NonShareableCommitment;
