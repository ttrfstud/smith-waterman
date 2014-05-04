var assert = require('assert');
var mmatch = require('../mmatch');

describe('mmatch', function () {

  it('test1', function (done) {
    var H;
    var i, j;
    var seq1;
    var seq2;
    var simfunc;

    var res;

    H = [
      [1,  1, 1],
      [30, 3, 4],
      [5,  6, 7]
    ]; // curr is 30

    i = 2;
    j = 1;

    seq1 = [1, 2, 3];
    seq2 = [2, 3, 4];

    simfunc = function (a, b) {
      if (a === b) {
        return 2;
      } else {
        return -1;
      }
    };

    res = mmatch(H, i, j, seq1, seq2, simfunc);

    assert.equal(res, 32);

    done();
  });

  it('test2', function (done) {
    var H;
    var i, j;
    var seq1;
    var seq2;
    var simfunc;

    H = [
      [78, 100, 1000],
      [3,  4,   2   ],
      [25, 30,  876 ]
    ]; // curr is 78

    i = 1;
    j = 1;

    seq1 = [7, 9, 10];
    seq2 = [20, 30, 40];

    simfunc = function (a, b) {
      if (a !== b) {
        return 800;
      } else {
        return 0;
      }
    }

    res = mmatch(H, i, j, seq1, seq2, simfunc);

    assert.equal(res, 878);

    done();
  });
});