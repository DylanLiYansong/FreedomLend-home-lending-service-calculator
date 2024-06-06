import React, { ReactNode, useState } from "react";
import { Paper } from "@mui/material";
import Header from "@/layout/SectionHeader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
const style = {
  minWidth: "640px",
  maxWidth: "1280px",
  width: "auto",
  margin: "32px",
};

interface SectionProps {
  children: ReactNode;
  headerText: string;
  addButtonLable: string;
  numberOfInstances: number;
  addInstanceDispatch: AppDispatch;
}
const SectionContainer = ({
  children,
  headerText,
  numberOfInstances,
  addButtonLable,
  addInstanceDispatch,
}: SectionProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();
  const handleAddInstance = () => {
    dispatch(addInstanceDispatch);
  };
  return (
    <Paper elevation={3} sx={style}>
      <Header
        headerText={headerText}
        addButtonLable={addButtonLable}
        handleClickHeader={handleOpen}
        handleAddbutton={handleAddInstance}
        count={!open ? `(${numberOfInstances})` : ""}
      />
      {open && children}
    </Paper>
  );
};

export default SectionContainer;
