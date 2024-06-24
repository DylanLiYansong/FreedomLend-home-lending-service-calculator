import React from "react";
import { RootState } from "@/store/store";
import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/constant/Fields";
import { FieldInterface } from "@/utils/constant/Fields";
import NumericInput from "@/layout/NumericInput";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstance } from "@/store/slices/formSlice";
import Selector from "@/layout/Selector";
import { IOption } from "@/layout/Selector/Selector";
const LoanList = () => {
  const loans = useSelector((state: RootState) => {
    return state.form.loans;
  });
  const dispatch = useDispatch();
  const handleDelete = (loadId: string) => {
    dispatch(deleteInstance({ section: Section.Loans, instanceId: loadId }));
  };
  return (
    <Box sx={styles.container}>
      {loans.map((loan, i) => (
        <Box sx={styles.columns}>
          <Typography variant="subtitle1" sx={styles.instanceName}>
            Loans {i + 1}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {i === 0 && (
              <Typography key={i} variant="body2">
                Purpose
              </Typography>
            )}
            <Box sx={{ width: "120px" }}>
              <Selector options={loadPurposeOptions} width="120px" />

              {/* <NumericInput key={field.id} field={field} /> */}
            </Box>
          </Box>
          {fields.map((field) => {
            return (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {i === 0 && (
                  <Typography key={i} variant="body2">
                    {field.label}
                  </Typography>
                )}
                <Box sx={{ width: "120px" }}>
                  <NumericInput key={field.id} field={field} />
                </Box>
              </Box>
            );
          })}

          {loans.length > 1 && (
            <IconButton
              sx={styles.deleteIcon}
              onClick={() => handleDelete(loan.id)}
            >
              <ClearIcon />
            </IconButton>
          )}
        </Box>
      ))}
    </Box>
  );
};
const loadPurposeOptions: IOption[] = [
  {
    value: "Investment",
    label: "Investment",
  },

  {
    value: "OO",
    label: "Owner Occupied",
  },
];
export const styles: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "80%",
    gap: "8px",
    margin: "8px",
    padding: "8px",
  },
  columns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  instanceName: {
    minWidth: "60px",
  },
  deleteIcon: {
    paddingBottom: 0,
  },
};

export const fields: FieldInterface[] = [
  {
    id: "loanAmount",
    label: "Loan Amount",
    type: "amount",
  },
  {
    id: "lendingInterestRate",
    label: "Interest rate",
    type: "rate",
  },
  {
    id: "commitmentTerm",
    label: "Term",
    type: "quantity",
  },
  {
    id: "interestOnlyTerm",
    label: "IO Term",
    type: "quantity",
  },
];
export default LoanList;
