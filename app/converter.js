exports.hexToRgb = function(hex) {

  // Split the hex value into pieces, convert back to
  // base ten with parse int.
  var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];

};


