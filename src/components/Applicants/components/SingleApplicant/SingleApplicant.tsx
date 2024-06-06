import React from "react";
import TextFieldGroup from "@/layout/TextFieldGroup";
import { IApplicantInterface } from "@/utils/interfaces/formInterfaces";
import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { deleteApplicant, getApplicantsNumber } from "@/store/slices/formSlice";
import { singleInstanceStyles as styles } from "@/styles/singleInstanceStyle";
import { incomeFields, expenseFields } from "@/utils/interfaces/FieldInterface";
const SingleApplicant = ({
  applicant,
  index,
}: {
  applicant: IApplicantInterface;
  index: number;
}) => {
  const dispatch = useDispatch();
  const numberOfApplicants = useSelector(getApplicantsNumber);
  const handleDelete = () => {
    dispatch(deleteApplicant({ applicantId: applicant.id }));
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">Applicant {index + 1}</Typography>
        {numberOfApplicants > 1 && (
          <IconButton sx={{ height: "32px" }} onClick={handleDelete}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={styles.textFieldGroups}>
        <TextFieldGroup fields={incomeFields} />
        <TextFieldGroup fields={expenseFields} />
      </Box>
    </Box>
  );
};

export default SingleApplicant;
