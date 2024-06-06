import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/interfaces/FieldInterface";
const applicantsLableContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: "175px",
    "&>*:nth-child(1)": {
      marginTop: "28px",
    },
    "&>*:nth-child(5)": {
      marginTop: "24px",
    },
  },
  labels: {
    height: "45px",
  },
};
const defaultLableContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: "175px",
    "&>*:nth-child(1)": {
      marginTop: "28px",
    },
  },
  labels: {
    height: "45px",
  },
};
export const getLabelContainerStyle = (section: Section) => {
  if (section === Section.ApplicantsExpense) {
    return applicantsLableContainerStyle;
  } else {
    return defaultLableContainerStyle;
  }
};
