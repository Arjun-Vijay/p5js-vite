const calculateBranchHeight = (level) => {
  const heightInputElement = document.getElementById("branchHeightInput");
  return Math.max(heightInputElement.value * Math.pow(0.66, level), 2);
};

export default calculateBranchHeight;
