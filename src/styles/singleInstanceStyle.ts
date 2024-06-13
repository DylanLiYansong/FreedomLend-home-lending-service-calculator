import { SxPropsStyles } from "@/theme/globalStyle.js";
export const INPUT_FIELD_WIDTH = "220px";
export const singleInstanceContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: INPUT_FIELD_WIDTH,
    width: INPUT_FIELD_WIDTH,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30px",
  },
};
