import React, { useEffect, useRef } from "react";
import { p5 } from "p5js-wrapper";
import { HSB_COLOR_MODE, DEGREE_ANGLE_MODE } from "./js/constants";
import { calculateBranchAngle } from "./js/utils/calculate";
import { drawTreeRoot, drawBranches } from "./js/utils/draw";
import { useFormContext } from "./FormContext";
import Paper from "@mui/material/Paper";

const TreeCanvas = () => {
  const { formValues } = useFormContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    canvasRef.current = new p5((p) => {
      const canvas = document.getElementById("tree-canvas");
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      let angle;

      p.setup = () => {
        p.createCanvas(width, height);
        p.colorMode(HSB_COLOR_MODE);
        p.angleMode(DEGREE_ANGLE_MODE);
      };

      p.draw = () => {
        // Black background
        p.background(0, 0, 2);

        // Draw tree root in the middle of the canvas
        p.translate(width / 2, height);
        drawTreeRoot(p);

        // Draw the branches
        angle = calculateBranchAngle(width, formValues.branchAngle);
        drawBranches(1, angle, p);
      };
    }, "tree-canvas");

    return () => {
      canvasRef.current.remove();
    };
  });

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.redraw();
    }
  }, [formValues]);

  return (
    <div>
      <div id="tree-canvas" style={{ width: "650px", height: "575px" }}></div>
    </div>
  );
};

export default TreeCanvas;
