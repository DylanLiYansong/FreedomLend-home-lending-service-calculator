import React from "react";
import { Container } from "@mui/material";
import Loans from "@/components/Loans";
import NonShareableCommitment from "./NonShareableCommitment";
import Applicants from "./Applicants/Applicants";
import ShareableCommitments from "@/components/ShareableCommitments";
import ResultTable from "./ResultTable";
const Homepage = () => {
  return (
    <>
      <Container sx={{ width: "90%" }}>
        <Applicants />
        <Loans />
        <ShareableCommitments />
        <NonShareableCommitment />
      </Container>
      <Container sx={{ width: "90%" }}>
        <ResultTable />
      </Container>
    </>
  );
};

export default Homepage;
