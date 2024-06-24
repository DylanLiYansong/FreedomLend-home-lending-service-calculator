import React from "react";
import { ILoanInterface } from "@/utils/interfaces/formInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstance, getLoansNumber } from "@/store/slices/formSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { getFields, Section } from "@/utils/constant/Fields";
import { Box, IconButton, Typography } from "@mui/material";
import NumericInput from "@/layout/NumericInput";

const Loan = ({ loan, index }: { loan: ILoanInterface; index: number }) => {
  const dispatch = useDispatch();
  const numberOfInstances = useSelector(getLoansNumber);
  const { id } = loan;
  const handleDelete = () => {
    dispatch(deleteInstance({ section: Section.Loans, instanceId: loan.id }));
  };
  const fields = getFields({
    section: Section.Loans,
    instanceId: id,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // gap: "16px",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="subtitle1">Loans {index + 1}</Typography>
      {fields.map((field) => {
        return <NumericInput key={field.id} field={field} />;
      })}

      {numberOfInstances > 0 && (
        <IconButton onClick={handleDelete}>
          <ClearIcon />
        </IconButton>
      )}
    </Box>
  );
};
export default Loan;
