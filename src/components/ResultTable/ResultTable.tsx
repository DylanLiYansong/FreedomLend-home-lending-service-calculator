import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatAmount } from "@/utils/functions";
import { sectionContainerStyle } from "@/layout/SectionContainer";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getFormData,
  getAssessmentResult,
  calculate,
} from "@/store/slices/formSlice";

export default function BasicTable() {
  const formData = useSelector(getFormData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate());
  }, [formData]);
  const rows = useSelector(getAssessmentResult);
  return (
    <TableContainer component={Paper} sx={sectionContainerStyle}>
      <Box sx={{ padding: "32px" }}>
        <Table
          sx={{ minWidth: 650, width: "80%", margin: "0 auto" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Lender</TableCell>
              <TableCell align="right">Monthly Surplus</TableCell>
              <TableCell align="right">Product Rate</TableCell>
              <TableCell align="right">Monthly Repay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ lender, eligible, monthlyRepay, monthlySurplus }) => (
              <TableRow
                key={lender.lenderId}
                sx={{
                  backgroundColor: `${
                    eligible ? "success.light" : "error.light"
                  }`,
                }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={lender.image}
                    alt={lender.lenderName}
                    style={{
                      height: "32px",
                      objectFit: "contain",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  {formatAmount(monthlySurplus)}
                </TableCell>
                <TableCell align="right">{lender.interestRate}</TableCell>
                <TableCell align="right">
                  {formatAmount(monthlyRepay)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}
