import React from "react";
import { Button, Typography, Stack, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

const headerStyle = {
  bgcolor: "#eeeeee",
  padding: 2,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "&:hover": {
    bgcolor: "#d9d9d9",
  },
  button: {
    bgcolor: "transparent",
  },
};
interface HeaderPropsInterface {
  headerText: string;
  handleClickHeader: () => void;
  handleAddbutton: () => void;
  addButtonLable: string;
  count: string;
}
const SectionHeader = ({
  headerText,
  handleClickHeader,
  handleAddbutton,
  addButtonLable,
  count,
}: HeaderPropsInterface) => {
  return (
    <Box sx={headerStyle}>
      <Stack
        alignItems="center"
        direction="row"
        gap={1}
        onClick={handleClickHeader}
      >
        <KeyboardArrowDownIcon />
        <Typography variant="h5">{`${headerText} ${count}`}</Typography>
      </Stack>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddbutton}
        sx={{ border: "solid 1px", width: "180px" }}
      >
        {addButtonLable}
      </Button>
    </Box>
  );
};

export default SectionHeader;
