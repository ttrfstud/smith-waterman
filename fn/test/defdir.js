var assert = require('assert');

var defdir = require('../defdir');
var dir = require('../../obj/dir');

describe('defdir', function () {
  it('test diag', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = 4;
    mmscore = 4;
    delscore = 3;
    inscore = 2;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.diag);

    done();
  });

  it('test right', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = 4;
    mmscore = 3;
    delscore = 4;
    inscore = 2;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.left);

    done();
  });

  it('test up', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = 4;
    mmscore = 3;
    delscore = 2;
    inscore = 4;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.up);

    done();
  });

  it('test ties, mm-del, mm priority', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = 4;
    mmscore = 4;
    delscore = 4;
    inscore = 3;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.diag);

    done();
  });

  it('test ties, del-ins, del priority', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = 4;
    mmscore = 3;
    delscore = 4;
    inscore = 4;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.left);

    done();
  });

  it('test ties, mm-ins, mm priority', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = 4;
    mmscore = 4;
    delscore = 3;
    inscore = 4;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.diag);

    done();
  });

  // zero will never win unless all three values are negative
  // when all values are negative, the restorelm procedure will not go further
  // but nevertheless, we need to assign dir
  // it would be fair to assign dir.none

  it('test zero wins, mm', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = -3;
    mmscore = -3;
    delscore = -4;
    inscore = -5;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.none);

    done();
  });

  it('test zero wins, del', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = -3;
    mmscore = -5;
    delscore = -3;
    inscore = -4;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.none);

    done();
  });

  it('test zero wins, in', function (done) {
    var curscore;
    var mmscore;
    var delscore;
    var inscore;

    curscore = -3;
    mmscore = -5;
    delscore = -4;
    inscore = -3;

    assert.equal(defdir(curscore, mmscore, delscore, inscore), dir.none);

    done();
  });
});