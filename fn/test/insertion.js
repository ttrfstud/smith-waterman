var assert = require('assert');
var insertion = require('../insertion');

describe('insertion', function () {
  it('test, 1 step, 1', function (done) {
    var H;
    var i, j;
    var gss;
    var res;

    H = [
      [0, 0, 0, 0, 0, 0],
      [3, 2, 4, 3, 54, 550]
    ];

    i = 1;
    j = 5;

    gss = function (i) {
      return i;
    };

    res = insertion(H, i, j, gss);

    assert.equal(res, 55);

    done();
  });

  it('test, 1 step, 2', function (done) {
    var H;
    var i, j;
    var gss;
    var res;

    H = [
      [0, 0, 0, 0, 0, 0],
      [3, 52, 52, 4, 52, NaN]
    ];

    i = 1;
    j = 5;

    gss = function (i) {
      return -i * 10;
    };

    res = insertion(H, i, j, gss);

    assert.equal(res, 42);

    done();
  });

  it('test, some steps, 1', function (done) {
    var H;
    var i, j;
    var gss;
    var res;

    H = [
      [0, 0, 0, 0, 0, 0],
      [0, 2, 1, 2, 0, NaN]
    ];

    i = 1;
    j = 5;

    gss = function (i) {
      return -i * 10;
    };

    res = insertion(H, i, j, gss);

    assert.equal(res, -18);

    done();
  });

  it('test, some steps, 2', function (done) {
    var H;
    var i, j;
    var gss;
    var res;

    H = [
      [0, 0, 0, 0, 0, 0],
      [-3, -1, 2, -1, -3, NaN]
    ];

    i = 1;
    j = 5;

    gss = function (i) {
      return i * 10;
    };

    res = insertion(H, i, j, gss);

    assert.equal(res, 32);

    done();
  });
});