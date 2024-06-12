import React from "react";
import SectionContainer from "@/layout/SectionContainer";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import LoanList from "@/components/Loans/LoanList";
import { RootState } from "@/store/store";
import { Section } from "@/utils/interfaces/FieldInterface";

const Loans = () => {
  const numOfLoans = useSelector((state: RootState) => state.form.loans.length);
  return (
    <SectionContainer
      headerText="Loans"
      addButtonLable="ADD LOAN"
      numberOfInstances={numOfLoans}
      addInstanceDispatch={addInstance({ section: Section.Loans })}
      children={<LoanList />}
    />
  );
};

export default Loans;
