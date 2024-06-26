import React from "react";
import { Container } from "@mui/material";
import Loans from "@/components/Loans";
import NonShareableCommitment from "./NonShareableCommitment";
import Applicants from "./Applicants/Applicants";
import ShareableCommitments from "@/components/ShareableCommitments";
import ResultTable from "./ResultTable";
import { Box, Button } from "@mui/material";
const Homepage = () => {
  return (
    <>
      <Container
        sx={{
          width: "90%",
        }}
      >
        <Applicants />
        <Loans />
        <ShareableCommitments />
        <NonShareableCommitment />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px", // Optional: Add some margin to separate the button from other elements
          }}
        >
          <Button variant="contained" color="secondary">
            Calculate
          </Button>
        </Box>
      </Container>
      <Container sx={{ width: "90%" }}>
        <ResultTable />
      </Container>
    </>
  );
};

export default Homepage;
