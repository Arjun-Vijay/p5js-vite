const calculateBranchWidth = (level) => {
  const widthInputElement = document.getElementById("branchWidthInput");
  return Math.max(widthInputElement.value - level * 2.5, 1);
};

export default calculateBranchWidth;
