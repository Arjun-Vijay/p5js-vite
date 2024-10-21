// import "../css/style.css";
import { p5 } from "p5js-wrapper";
import recursiveBranch from "./recursiveBranch";
import {
  HSB_COLOR_MODE,
  DEGREE_ANGLE_MODE,
  MAX_BRANCH_WIDTH,
  MAX_BRANCH_HEIGHT,
} from "./constants";
import { calculateBranchAngle } from "./utils";

let TreeCanvas = new p5((p) => {
  const canvas = document.getElementById("tree-canvas");
  console.log(canvas);
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
    p.background(0);

    // Set the tree position to the middle of the canvas
    p.translate(width / 2, height);

    // Draw the root
    p.stroke(30, 255, 150);
    p.strokeWeight(MAX_BRANCH_WIDTH);
    p.line(0, 0, 0, -MAX_BRANCH_HEIGHT);
    p.translate(0, -MAX_BRANCH_HEIGHT);

    // Draw the branches
    angle = calculateBranchAngle(p.mouseX, width);
    recursiveBranch(MAX_BRANCH_HEIGHT, 0, angle, p);
  };
}, "tree-canvas");

export default TreeCanvas;
