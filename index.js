function sw(seq1, seq2, gss, simfunc) {
  var len1, len2;
  var i, j;
  var H;

  var mmscore;
  var delscore;
  var inscore;

  var longestmatch;

  len1 = seq1.length;
  len2 = seq2.length;

  H = [];
  H[0] = [];

  for (i = 0; i < len2; i++) {
    H[0][i] = 0;
  }

  for (i = 0; i < len1; i++) {
    if (!H[i]) {
      H[i] = [];
    }

    H[i][0] = 0;
  }

  for (i = 1; i < len1 + 1; i++) {
    for (j = 1; j < len2 + 1; j++) {
      mmscore = mmatch(H, i, j, simfunc);
      delscore = deletion(H, i, j, gss);
      inscore = insertion(H, i, j, gss);

      H[i][j] = Math.max(0, mmscore, delscore, inscore);
      H[i][j] = defdir(H[i][j], mmscore, delscore, inscore);
    }
  }

  longestmatch = restore(H);

  return longestmatch;
}

module.exports = sw;