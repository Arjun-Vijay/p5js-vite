const calculateBranchHeight = (height) => {
  // Decrease height by 2/3 each iteration
  return height * 0.66;
};

export default calculateBranchHeight;
