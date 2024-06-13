import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LabelContainer from "@/layout/SectionLabels";
import InstanceListContainer from "@/layout/InstanceListContainer";
import Loan from "@/components/Loans/Loan";
import { sectionBodyContainertyles } from "@/styles/styles";
import { Section } from "@/utils/interfaces/FieldInterface";
import { loansSectionLabels } from "@/utils/interfaces/FieldInterface";
import { Box } from "@mui/material";

const LoanList = () => {
  const loans = useSelector((state: RootState) => {
    return state.form.loans;
  });

  return (
    <Box sx={sectionBodyContainertyles.container}>
      <LabelContainer labels={loansSectionLabels} section={Section.Loans} />
      <InstanceListContainer>
        {loans.map((loan, i) => (
          <Loan index={i} key={loan.id} loan={loan} />
        ))}
      </InstanceListContainer>
    </Box>
  );
};

export default LoanList;
