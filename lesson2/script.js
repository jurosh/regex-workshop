/**
* Regex tester:
* https://regex101.com/
*/

// 1) verify 2-5 digit number
function verifyNumber(number) {

  // TODO: write regex
  var regExp = /.*/;

  return regExp.test(number);
}

// 2) verify image name, extension jpg or png
function verifyImageName(imageName) {

  // TODO: write regex
  var regExp = /.*/;

  return regExp.test(imageName);
}

// 3) verify name, and optional surname as per spec
function verifyName(name) {

  // TODO: write regex
  var regExp = /.*/;

  return regExp.test(name);
}

// 4) verify password, as per spec
function verifyPassword(password) {

  // TODO: write regex
  var regExp = /.*/;

  return regExp.test(password);
}

// 5) Do math! Example `5 + 3 =` (8), `2 / 1 =` (2)
function doMath(mathString) {

  // TODO: write regex
  var regExp = /.*/;

  // TODO: fill variables
  var isRegexOK = false;
  var first = 0;
  var second = 0;
  var sign = '?';

  if (isRegexOK) {
    console.log('Math data:', first, sign, second);
    return eval(first + sign + second);
  } else {
    return false;
  }
}

// 6) Rearange input text, as per spec
function doRearangement(inputText) {

  // TODO: write regex and replacement
  var regExp = /.*/;
  var replaceExpr = '';

  return inputText.replace(regExp, replaceExpr);
}

// 7) Simple strip html tags
function stripHtmlTags(inputHtml) {

  // TODO: write regex
  var regExp = /.*/;

  return inputHtml.replace(regExp, '');
}
