const calculateBranchAngle = (x, width) => {
  // Calculate the angle based on the mouse position, maximum 90 degrees
  let angle = (x / width) * 90;
  return Math.min(angle, 90);
};

export default calculateBranchAngle;
