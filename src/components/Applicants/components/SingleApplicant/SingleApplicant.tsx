import React from "react";
import { IApplicantInterface } from "@/utils/interfaces/formInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstance, getApplicantsNumber } from "@/store/slices/formSlice";
import { Section } from "@/utils/interfaces/FieldInterface";

import { SectionPlus } from "@/utils/interfaces/FieldInterface";
import SingleInstance from "@/layout/SingleInstance";
const SingleApplicant = ({
  applicant,
  index,
}: {
  applicant: IApplicantInterface;
  index: number;
}) => {
  const numberOfApplicants = useSelector(getApplicantsNumber);
  const { id: applicantId } = applicant;
  const dispatch = useDispatch();

  const handleDeleteApplicant = () => {
    dispatch(
      deleteInstance({ section: Section.Applicants, instanceId: applicantId })
    );
  };
  return (
    <SingleInstance
      instanceIndex={index}
      instanceId={applicantId}
      section={SectionPlus.ApplicantsIncome}
      deleteEnabled={numberOfApplicants > 1}
      handleDeleteInstance={handleDeleteApplicant}
    />
  );
};

export default SingleApplicant;
