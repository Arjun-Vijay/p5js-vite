import * as React from "react";
import Grid2 from "@mui/material/Grid2";
import Form from "./Form";
import TreeCanvas from "./TreeCanvas";
import { FormProvider } from "./FormContext";

export default function App() {
  return (
    <FormProvider>
      <Grid2
        container
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 xs={12} md={6} container>
          <TreeCanvas />
        </Grid2>
        <Grid2 xs={12} md={6} container>
          <Form />
        </Grid2>
      </Grid2>
    </FormProvider>
  );
}
