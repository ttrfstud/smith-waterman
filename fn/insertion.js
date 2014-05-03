/** gss - gap-scoring scheme **/
function insertion(H, i, j, gss) {
  var l;
  var max;
  var maxidx;

  max = -1;

  for (l = i; l >= 0; l--) {
    if(max < H[l][j]) {
      max = H[l][j];
      maxidx = l;
    }
  } 

  max = max + gss(maxidx);

  return max;
}

module.exports = insertion;