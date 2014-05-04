var dir = require('../obj/dir');

function defdir(curscore, mmscore, delscore, inscore) {
  var curdir;

  if (curscore === mmscore) {
    curdir = dir.diag;
  } else if (curscore === delscore) {
    curdir = dir.up;
  } else if (curscore === inscore) {
    curdir = dir.left;
  }

  if (curscore < 0) {
    curdir = dir.none;
  }

  return curdir;
}

module.exports = defdir;