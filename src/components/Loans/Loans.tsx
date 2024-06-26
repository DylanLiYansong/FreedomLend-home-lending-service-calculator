import React from "react";
import SectionContainer from "@/layout/SectionContainer";
import { useSelector } from "react-redux";
import { addInstance } from "@/store/slices/formSlice";
import LoanList from "@/components/Loans/LoanList";
import { RootState } from "@/store/store";
import { Section } from "@/utils/constant/Fields";

const Loans = () => {
  const numOfLoans = useSelector(
    (state: RootState) => state.form.formState.loans.length
  );
  return (
    <SectionContainer
      headerText="New Loan Details"
      addButtonLable="ADD New LOAN"
      numberOfInstances={numOfLoans}
      addInstanceDispatch={addInstance({ section: Section.Loans })}
      children={<LoanList />}
    />
  );
};

export default Loans;
