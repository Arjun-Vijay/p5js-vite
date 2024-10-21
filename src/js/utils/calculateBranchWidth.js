import { MAX_BRANCH_WIDTH } from "../constants";

const calculateBranchWidth = (level) => {
  // reduce branch width on each iteration to simulate a more "tree-like" appearance
  return Math.max(MAX_BRANCH_WIDTH - level * 3, 1);
};

export default calculateBranchWidth;
