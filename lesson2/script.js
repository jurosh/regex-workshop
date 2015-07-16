/**
* Regex tester:
* https://regex101.com/
*/

// verify 2-5 digit number
function verifyNumber(number) {
  // var regExp = /.*/;
  var regExp = /.*/;
  return regExp.test(number);
}

// verify image name, extension jpg or png
function verifyImageName(imageName) {
  var regExp = /.*/;
  return regExp.test(imageName);
}

// verify name, and optional surname as per spec
function verifyName(name) {
  var regExp = /.*/;
  return regExp.test(name);
}

// verify password, as per spec
function verifyPassword(password) {
  var regExp = /.*/;
  return regExp.test(password);
}

// Do math! Example `5 + 3 =` (8), `2 / 1 =` (2)
function doMath(mathString) {
  var regExp = /(\d) ?([\+\-\*\/]) ?(\d) ?=?/;

  var match = regExp.exec(mathString);
  if(match) {
    var matches = true;
  var first = match[1];
  var sign = match[2];
  var second = match[3];
  } else {
    var matches = false;
  }

/*
  var first = 0;
  var second = 0;
  var sign = '?';*/

  if (matches) {
    console.log('Math data:', first, sign, second);
    return eval(first + sign + second);
  } else {
    return false;
  }
}
