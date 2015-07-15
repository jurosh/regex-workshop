/*global namespace:false, App:false, _:false, testPropertyTypesOf:false, QUnit: false, empty:false, sinon:false, expect: false;*/
/*jshint camelcase:true, curly:true, eqeqeq:true, immed:true, indent:2, latedef:true, newcap:true, noarg:true, noempty:true, nonew:true, quotmark:single, undef:true, unused:true, strict:true, trailing:true */

(function () {
  'use strict';

  // verifyNumber function test
  [
    { input: 1212, output: true},
    { input: 11111, output: true},
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
        'Verify functionality for number %number'.replace('%number', testObject.input));
    });
  });

  // verifyZipCode function test
  [
    { input: 's-000', output: true},
    { input: 'o-324', output: true},
    { input: 'A-091', output: true},
    { input: 'X-460', output: true},
    { input: 'o-000', output: true},
    { input: 'X-234', output: true},
    { input: 'as-453', output: false},
    { input: '324', output: false},
    { input: 'a-Sdf', output: false},
    { input: 'B - 321', output: false},
    { input: 'a-2125', output: false},
    { input: '-2125', output: false},
    { input: '_5135', output: false},
    { input: 3, output: false},
    { input: {}, output: false}
  ].forEach(function(testObject) {
    QUnit.test('verifyZipCode', function () {
      QUnit.strictEqual(verifyZipCode(testObject.input), testObject.output,
        'For %code test function verify zip code'.replace('%code', testObject.input));
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
        'For %code function verifyImageName works correctly'.replace('%code', testObject.input));
    });
  });

  // verifyName function test
  [
    { input: 'Natalia', output: true},
    { input: 'Nata Dijdr', output: true},
    { input: 'Mateo Guisfe', output: true},
    { input: 'Naaaaaa Kiserduje', output: true},
    { input: 'Naaaaaa K', output: true},
    { input: 'Naa Kgsh', output: true},
    { input: 'Natalia ', output: false},
    { input: 'natalia', output: false},
    { input: 'Natalia Gaaaaaaaaaa', output: false},
    { input: 'Natalia_Ghysi', output: false},
    { input: 'aMate', output: false},
    { input: 'MaTeo', output: false},
    { input: 'Mateo gtra', output: false},
    { input: 'Natr Dkshi ', output: false},
    { input: {}, output: false}
  ].forEach(function(testObject) {
    QUnit.test('verifyName', function () {
      QUnit.strictEqual(verifyName(testObject.input), testObject.output,
        'For %code function verifyName works correctly'.replace('%code', testObject.input));
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
        'For %code function verifyPassword works correctly'.replace('%code', testObject.input));
    });
  });

})();
