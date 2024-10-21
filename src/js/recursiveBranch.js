import { calculateBranchWidth, calculateBranchHeight } from "./utils";

const recursiveBranch = (height, level, angle, p) => {
  let branchWidth = calculateBranchWidth(level);
  p.strokeWeight(branchWidth);

  // Start coloring leaves green after the 3rd level
  if (level < 3) {
    p.stroke(30, 255, 150); // Brown
  } else {
    p.stroke(100 + level * 10, 255, 255); // Green
  }

  height = calculateBranchHeight(height);
  if (height > 2) {
    // Draw right branches
    p.push();
    p.rotate(angle);
    p.line(0, 0, 0, -height);
    p.translate(0, -height);
    recursiveBranch(height, level + 1, angle, p);
    p.pop();

    // Draw left branches
    p.push();
    p.rotate(-angle);
    p.line(0, 0, 0, -height);
    p.translate(0, -height);
    recursiveBranch(height, level + 1, angle, p);
    p.pop();
  }
};

export default recursiveBranch;
