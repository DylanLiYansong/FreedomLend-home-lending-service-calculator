import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/LabelContainer";
import InstanceListContainer from "@/layout/InstanceListContainer";
import Loan from "@/components/Loans/Loan";
import SectionBodyContainer from "@/layout/SectionBodyContainer/SectionBodyContainer";
import { Section } from "@/utils/interfaces/FieldInterface";

const loansLabels = [
  "",
  "Loan amount",
  "Lending interest rate (%)",
  "Term (years)",
  "Interest only terms (years)",
];

const LoanList = () => {
  const loans = useSelector((state: RootState) => {
    return state.form.loans;
  });

  return (
    <SectionBodyContainer>
      <LabelContainer labels={loansLabels} sectionName={Section.Loans} />
      <InstanceListContainer>
        {loans.map((loan, i) => (
          <Loan index={i} key={loan.id} loan={loan} />
        ))}
      </InstanceListContainer>
    </SectionBodyContainer>
  );
};

export default LoanList;
