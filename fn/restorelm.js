function restorelm(H, T) {
  var len1, len2;
  var i, j;
  var max;
  var maxi, maxj;

  var res;

  max = -1;

  len1 = H.length;
  len2 = H[0].length;

  res = [];

  for (i = 0; i < len1; i++) {
    for (j = 0; j < len2; j++) {
      if (max < H[i][j]) {
        max = H[i][j];
        maxi = i;
        maxj = j;
      }
    }
  }

  for (i = maxi; i >= 0; i--) {
    for (j = maxj; j >= 0; j--) {
      
    }
  }
}

module.exports = restorelm;