import React from "react";
import { ILoanInterface } from "@/utils/interfaces/formInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstance, getLoansNumber } from "@/store/slices/formSlice";
import { Section } from "@/utils/interfaces/FieldInterface";
import SingleInstance from "@/layout/SingleInstance";

const Loan = ({ loan, index }: { loan: ILoanInterface; index: number }) => {
  const dispatch = useDispatch();
  const numberOfInstances = useSelector(getLoansNumber);
  const { id } = loan;
  const handleDelete = () => {
    dispatch(deleteInstance({ section: Section.Loans, instanceId: loan.id }));
  };
  return (
    <SingleInstance
      instanceIndex={index}
      instanceId={id}
      section={Section.Loans}
      deleteEnabled={numberOfInstances > 1}
      handleDeleteInstance={handleDelete}
    />
  );
};

export default Loan;
