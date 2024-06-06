import React from "react";
import SectionContainer from "@/layout/SectionContainer";
import { useSelector } from "react-redux";
import { addLoan } from "@/store/slices/formSlice";
import LoanList from "@/components/Loans/LoanList";
import { RootState } from "@/store/store";

const Loans = () => {
  const numOfLoans = useSelector(
    (state: RootState) => state.form.applicants.length
  );
  return (
    <SectionContainer
      headerText="Loans"
      addButtonLable="ADD LOAN"
      numberOfInstances={numOfLoans}
      addInstanceDispatch={addLoan()}
      children={<LoanList />}
    />
  );
};

export default Loans;
