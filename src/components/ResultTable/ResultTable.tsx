import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import westpac from "@/assets/westpac.png";
import cba from "@/assets/cba.png";
import { sectionContainerStyle } from "@/layout/SectionContainer";
import { Box } from "@mui/material";
export enum LenderId {
  WESTPAC = 1,
  CBA = 2,
}

interface Lender {
  lenderId: LenderId;
  lenderName: string;
  image: string;
  monthlySurplus: string;
  productRate: string;
  monthlyRepay: string;
  eligible: boolean;
}

const rows: Lender[] = [
  {
    lenderId: 1,
    lenderName: "westpac",
    image: westpac,
    monthlySurplus: "-$12.9",
    productRate: "6.14%",
    monthlyRepay: "$3034",
    eligible: true,
  },
  {
    lenderId: 2,
    lenderName: "commonwealth bank",
    image: cba,
    monthlySurplus: "-$12.9",
    productRate: "6.54%",
    monthlyRepay: "$3044",
    eligible: false,
  },
];

export default function BasicTable() {
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
            {rows.map((row) => (
              <TableRow
                key={row.lenderId}
                sx={{
                  backgroundColor: `${
                    row.eligible ? "success.light" : "error.light"
                  }`,
                }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.image}
                    alt={row.lenderName}
                    style={{
                      height: "32px",
                      objectFit: "contain",
                    }}
                  />
                </TableCell>
                <TableCell align="right">{row.monthlySurplus}</TableCell>
                <TableCell align="right">{row.productRate}</TableCell>
                <TableCell align="right">{row.monthlyRepay}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}
