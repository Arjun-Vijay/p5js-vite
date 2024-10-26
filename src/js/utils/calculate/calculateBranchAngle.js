const calculateBranchAngle = (width, sliderValue) => {
  let angle = (sliderValue / width) * 90;
  return Math.min(angle, 90);
};

export default calculateBranchAngle;
