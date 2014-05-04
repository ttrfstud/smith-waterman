/** gss - gap-scoring scheme **/
function deletion(H, i, j, gss) {
  var k;
  var maxidx;
  var max;

  max = -1;

  for (k = i - 1; k >=0; k--) {
    if (max < H[k][j]) {
      max = H[k][j];
      maxidx = k;
    }
  }

  max = max + gss(i - maxidx);

  return max;
}

module.exports = deletion;