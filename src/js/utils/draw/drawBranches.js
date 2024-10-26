import { calculateBranchWidth, calculateBranchHeight } from "../calculate";

const drawBranches = (level, angle, p) => {
  let branchWidth = calculateBranchWidth(level);
  p.strokeWeight(branchWidth);

  let height = calculateBranchHeight(level);

  // Start coloring leaves green after the 5th level
  if (level < 5) {
    p.stroke(30, 255, 150); // Brown
  } else {
    p.stroke(100 + level * 7, 255, 255); // Green
  }

  if (height > 2) {
    // Draw right branches
    p.push();
    p.rotate(angle);
    p.line(0, 0, 0, -height);
    p.translate(0, -height);
    drawBranches(level + 1, angle, p);
    p.pop();

    // Draw left branches
    p.push();
    p.rotate(-angle);
    p.line(0, 0, 0, -height);
    p.translate(0, -height);
    drawBranches(level + 1, angle, p);
    p.pop();
  }
};

export default drawBranches;
