var dir = require('../obj/dir');

function restorelm(H, T) {
  var len1, len2;
  var i, j;
  var max;
  var maxi, maxj;

  var walk;

  max = -1;

  len1 = H.length;
  len2 = H[0].length;

  walk = [];

  for (i = 0; i < len1; i++) {
    for (j = 0; j < len2; j++) {
      if (max < H[i][j]) {
        max = H[i][j];
        maxi = i;
        maxj = j;
      }
    }
  }


  for (i = maxi, j = maxj; H[i][j];) {
    walk.push({ i: i - 1, j: j - 1 });

    console.log(T[i][j], i, j, max, T);
    switch(T[i][j]) {
      case dir.diag:
        i--;
        j--;
        break;
      case dir.left:
        j--;
        break;
      case dir.up:
        i--;
        break;
      default:
        break;
    }
  }

  return walk;
}

module.exports = restorelm;