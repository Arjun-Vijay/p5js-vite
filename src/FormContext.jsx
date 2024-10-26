import React, { createContext, useState, useContext } from "react";
import {
  DEFAULT_BRANCH_WIDTH,
  DEFAULT_BRANCH_HEIGHT,
  DEFAULT_BRANCH_ANGLE,
} from "./js/constants";
const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    branchWidth: DEFAULT_BRANCH_WIDTH,
    branchHeight: DEFAULT_BRANCH_HEIGHT,
    branchAngle: DEFAULT_BRANCH_ANGLE,
  });

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
