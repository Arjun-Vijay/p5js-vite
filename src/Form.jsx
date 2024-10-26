import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useFormContext } from "./FormContext";
import Typography from "@mui/material/Typography";

const Form = () => {
  const { formValues, setFormValues } = useFormContext();

  return (
    <Box
      style={{
        padding: "20px",
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          color: "white",
          fontSize: "clamp(2rem, 10vw, 2.15rem)",
        }}
      >
        Recursive Tree
      </Typography>
      <Typography sx={{ mt: 3, color: "#a0a0a0" }}>Branch Width</Typography>
      <TextField
        id="branchWidthInput"
        type="number"
        value={formValues.branchWidth}
        onChange={(e, newValue) =>
          setFormValues((prev) => ({ ...prev, branchWidth: newValue }))
        }
        variant="standard"
        fullWidth
        color="success"
        margin="normal"
        focused
        inputProps={{
          min: 0,
          max: 50,
          step: 0.2,
          style: {
            color: "#ffffff",
            width: "400px",
          },
        }}
      />
      <Typography sx={{ mt: 3, color: "#a0a0a0" }}>Branch Height</Typography>
      <TextField
        id="branchHeightInput"
        type="number"
        value={formValues.branchHeight}
        onChange={(e, newValue) =>
          setFormValues((prev) => ({ ...prev, branchHeight: newValue }))
        }
        variant="standard"
        color="success"
        fullWidth
        margin="normal"
        focused
        inputProps={{
          min: 0,
          max: 200,
          step: 1,
          style: {
            color: "#ffffff",
            width: "400px",
          },
        }}
      />
      <Typography sx={{ mt: 3, color: "#a0a0a0" }}>Branch Angle</Typography>
      <Slider
        id="branchAngleRange"
        min={0}
        max={750}
        value={formValues.branchAngle}
        onChange={(e, newValue) =>
          setFormValues((prev) => ({ ...prev, branchAngle: newValue }))
        }
        aria-label="Angle"
        valueLabelDisplay="auto"
        color="success"
        style={{ margin: "20px 0" }}
      />
    </Box>
  );
};

export default Form;
