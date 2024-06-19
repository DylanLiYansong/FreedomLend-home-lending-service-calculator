import { SxPropsStyles } from "@/theme/globalStyle.js";
import { INPUT_FIELD_WIDTH } from "@/utils/constant/Fields";
export const singleInstanceContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: INPUT_FIELD_WIDTH,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30px",
  },
};
