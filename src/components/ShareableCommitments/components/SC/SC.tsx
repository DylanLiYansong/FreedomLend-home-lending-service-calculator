import React from "react";
import SingleInstance from "@/layout/SingleInstance";
import { deleteInstance, getSCNumber } from "@/store/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { IShareableCommitment } from "@/utils/interfaces/formInterfaces";
import { Section } from "@/utils/interfaces/FieldInterface";

const SC = ({
  instance,
  index,
}: {
  instance: IShareableCommitment;
  index: number;
}) => {
  const numberOfInstances = useSelector(getSCNumber);
  const { id } = instance;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteInstance({ section: Section.ShareableCommitments, instanceId: id })
    );
  };
  return (
    <SingleInstance
      instanceIndex={index}
      instanceId={id}
      section={Section.ShareableCommitments}
      deleteEnabled={numberOfInstances > 1}
      handleDeleteInstance={handleDelete}
    />
  );
};

export default SC;
