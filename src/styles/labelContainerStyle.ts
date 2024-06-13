import { SxPropsStyles } from "@/theme/globalStyle.js";
import { Section } from "@/utils/interfaces/FieldInterface";

const LABEL_MIN_WIDTH = "200px";
const APPLICANT_INCOME_EXPENSE_GAP = "25px";
const applicantsLableContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: LABEL_MIN_WIDTH,
    "&>*:nth-child(1)": {
      marginTop: "45px",
    },
    "&>*:nth-child(4)": {
      marginTop: APPLICANT_INCOME_EXPENSE_GAP,
    },
  },
  labels: {
    paddingTop: "25px",
  },
};

const defaultLableContainerStyle: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: LABEL_MIN_WIDTH,
    "&>*:nth-child(1)": {
      marginTop: "45px",
    },
  },
  labels: {
    paddingTop: "25px",
  },
};
export const getLabelContainerStyle = (section: Section) => {
  if (section === Section.Applicants) {
    return applicantsLableContainerStyle;
  } else {
    return defaultLableContainerStyle;
  }
};
