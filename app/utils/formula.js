export const pathFromBezierCurve = ({
  initialAxis,
  initialControlPoint,
  endingControlPoint,
  endingAxis,
}) => `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `