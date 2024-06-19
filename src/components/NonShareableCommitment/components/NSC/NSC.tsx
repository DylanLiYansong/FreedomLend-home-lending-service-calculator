import React from "react";
import SingleInstance from "@/layout/SingleInstance";
import { deleteInstance, getNSCNumber } from "@/store/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { INonShareableCommitment } from "@/utils/interfaces/formInterfaces";
import { Section } from "@/utils/constant/Fields";

const NSC = ({
  instance,
  index,
}: {
  instance: INonShareableCommitment;
  index: number;
}) => {
  const numberOfInstances = useSelector(getNSCNumber);
  const { id } = instance;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteInstance({
        section: Section.NonShareableCommitments,
        instanceId: id,
      })
    );
  };
  return (
    <SingleInstance
      instanceIndex={index}
      instanceId={id}
      section={Section.NonShareableCommitments}
      deleteEnabled={numberOfInstances > 1}
      handleDeleteInstance={handleDelete}
    />
  );
};

export default NSC;
