import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/interfaces/FieldInterface";
export const applicantTextGroupStyles: SxPropsStyles = {
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
    "&>*:nth-child(4)": {
      marginTop: "24px",
    },
  },
};
export const textGroupStyles: SxPropsStyles = {
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
  },
};
export const singleInstanceContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: "220px",
    width: "220px",
  },
  header: {
    display: "flex",
    marginTop: "2px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
export const getTextFieldGroupStyle = (section?: Section) => {
  if (section === Section.Applicants) {
    return applicantTextGroupStyles;
  } else {
    return textGroupStyles;
  }
};
