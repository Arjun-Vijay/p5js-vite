const calculateBranchAngle = (width) => {
  const slider = document.getElementById("branchAngleRange");
  let angle = (slider.value / width) * 90;
  return Math.min(angle, 90);
};

export default calculateBranchAngle;
