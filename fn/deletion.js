/** gss - gap-scoring scheme **/
function deletion(H, i, j, gss) {
  var k;
  var maxidx;
  var max;

  max = -1;

  for (k = j; k >=0; k--) {
    if (max < H[i][k]) {
      max = H[i][k];
      maxidx = k;
    }
  }

  max = max + gss(maxidx);

  return max;
}

module.exports = deletion;