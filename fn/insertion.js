/** gss - gap-scoring scheme **/
function insertion(H, i, j, gss) {
  var l;
  var max;
  var maxidx;

  max = -1;

  for (l = j; l >= 0; l--) {
    if(max < H[i][l]) {
      max = H[i][l];
      maxidx = l;
    }
  } 

  console.log(j, maxidx);

  max = max + gss(j - maxidx);

  return max;
}

module.exports = insertion;