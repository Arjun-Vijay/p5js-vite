import { p5 } from "p5js-wrapper";
import { HSB_COLOR_MODE, DEGREE_ANGLE_MODE } from "./constants";
import { calculateBranchAngle } from "./utils/calculate";
import { drawTreeRoot, drawBranches } from "./utils/draw";

let TreeCanvas = new p5((p) => {
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
    angle = calculateBranchAngle(width);
    drawBranches(1, angle, p);
  };
}, "tree-canvas");

export default TreeCanvas;
