/*global namespace:false, App:false, _:false, testPropertyTypesOf:false, QUnit: false, empty:false, sinon:false, expect: false;*/
/*jshint camelcase:true, curly:true, eqeqeq:true, immed:true, indent:2, latedef:true, newcap:true, noarg:true, noempty:true, nonew:true, quotmark:single, undef:true, unused:true, strict:true, trailing:true */

(function () {
  'use strict';

  // verifyNumber function test
  /*
  [
    { input: 1212, output: true},
    { input: 99999, output: true},
    { input: 565, output: true},
    { input: 50, output: true},
    { input: 12345, output: true},
    { input: 34, output: true},
    { input: 6, output: false},
    { input: 123456, output: false},
    { input: 'a6435', output: false},
    { input: '6435b', output: false},
    { input: {}, output: false}
  ].forEach(function(testObject) {
    QUnit.test('verifyNumber', function () {
      QUnit.strictEqual(verifyNumber(testObject.input), testObject.output,
        'Verify function for number %number'.replace('%number', testObject.input));
    });
  });

  // verifyImageName function test
  [
    { input: 's.png', output: true},
    { input: 'image.jpg', output: true},
    { input: 'Image2.png', output: true},
    { input: 'BB_.png', output: true},
    { input: '_.png', output: true},
    { input: 'bb_.png', output: true},
    { input: ' gtu.jpg', output: false},
    { input: '.jpg', output: false},
    { input: '324fgjpg', output: false},
    { input: 'aS.gif', output: false},
    { input: 'my image.jpg', output: false},
    { input: 'Image.jpgjpg', output: false},
    { input: 'a.jpg4', output: false},
    { input: 'image.', output: false},
    { input: '.png', output: false},
    { input: {}, output: false}
  ].forEach(function(testObject) {
    QUnit.test('verifyImageName', function () {
      QUnit.strictEqual(verifyImageName(testObject.input), testObject.output,
        'Function verifyImageName for input %code'.replace('%code', testObject.input));
    });
  });

  // verifyName function test
  [
    { input: 'Juraj', output: true},
    { input: 'Juraj Furik', output: true},
    { input: 'Martin Pran', output: true},
    { input: 'Martin Prankovic', output: true},
    { input: 'Jurajiac', output: false},
    { input: 'Jurajiac Feritan', output: false},
    { input: 'juraj', output: false},
    { input: 'Juraj _And', output: false},
    { input: 'Juraj smallChar', output: false},
    { input: 'Juraj LongCharacters', output: false},
    { input: {}, output: false}
  ].forEach(function(testObject) {
    QUnit.test('verifyName', function () {
      QUnit.strictEqual(verifyName(testObject.input), testObject.output,
        'Test name `%code`'.replace('%code', testObject.input));
    });
  });

  // verifyPassword function test
  [
    { input: 'ghutR2', output: true},
    { input: 'hutR2', output: true},
    { input: '3%rtAhjushka', output: true},
    { input: 'PRo82@', output: true},
    { input: '%PRo82', output: true},
    { input: '%PRO82a*', output: true},
    { input: 'aP21', output: false},
    { input: 'asdtyuuashj3', output: false},
    { input: '21345', output: false},
    { input: 'gajahuwijd', output: false},
    { input: 'PGHYUUV', output: false},
    { input: 'MaTeo', output: false},
    { input: 'PGHYUUV', output: false},
    { input: '@aPfgh', output: false},
    { input: '%PRO82*&', output: false},
    { input: {}, output: false}
  ].forEach(function(testObject) {
    QUnit.test('verifyPassword', function () {
      QUnit.strictEqual(verifyPassword(testObject.input), testObject.output,
        'Password `%code` verification'.replace('%code', testObject.input));
    });
  });
  */

  // doMath function test
  [
    { input: '1 + 3', output: 4 },
    { input: '8 / 2', output: 4 },
    { input: '2 * 3', output: 6 },
    { input: '1-2', output: -1 },
    { input: '1 + 1 =', output: 2 },
    { input: {}, output: false },
  ].forEach(function(testObject) {
    QUnit.test('doMath', function () {
      QUnit.strictEqual(doMath(testObject.input), testObject.output,
        'Result of `%input` is not correct'.replace('%input', testObject.input));
    });
  });

})();
