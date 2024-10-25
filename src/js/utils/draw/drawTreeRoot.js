import { calculateBranchWidth, calculateBranchHeight } from "../calculate";

const drawTreeRoot = (p) => {
  const level = 0;
  const width = calculateBranchWidth(level);
  const height = calculateBranchHeight(level);

  p.stroke(30, 255, 150);
  p.strokeWeight(width);
  p.line(0, 0, 0, -height);
  p.translate(0, -height);
};

export default drawTreeRoot;
