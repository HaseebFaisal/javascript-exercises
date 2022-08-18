const ftoc = function(ftemp) {
  tempMath = (ftemp-32)*0.55555;
  return +tempMath.toFixed(1)
};

const ctof = function(ctemp) {
  tempMath = (ctemp*1.8)+32;
  return +tempMath.toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
