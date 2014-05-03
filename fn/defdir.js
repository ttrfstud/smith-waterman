var directions = require('../obj/direction');

function defdir(curscore, mmscore, delscore, inscore) {
  var dir;

  if (curscore === mmscore) {
    dir = directions.diag;
  } else if (curscore === delscore) {
    dir = directions.left;
  } else if (curscore === inscore) {
    dir = directions.up;
  }

  return dir;
}

module.exports = defdir;