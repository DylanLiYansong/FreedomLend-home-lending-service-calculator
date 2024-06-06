import React from "react";
import { Container } from "@mui/material";
import Loans from "@/components/Loans";
import NonShareableCommitment from "./NonShareableCommitment";
import Applicants from "./Applicants/Applicants";
const Homepage = () => {
  return (
    <Container>
      <Applicants />
      <Loans />
      <NonShareableCommitment />
    </Container>
  );
};

export default Homepage;
