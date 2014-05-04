var mmatch = require('./fn/mmatch');
var deletion = require('./fn/deletion');
var insertion = require('./fn/insertion');
var defdir = require('./fn/defdir');
var restorelm = require('./fn/restorelm');

var dir = require('./obj/dir');

function sw(seq1, seq2, gss, simfunc) {
  var len1, len2;
  var i, j;
  var H, T;

  var mmscore;
  var delscore;
  var inscore;

  var longestmatch;

  len1 = seq1.length;
  len2 = seq2.length;

  H = [];
  T = [];
  H[0] = [];
  T[0] = [];

  for (i = 0; i < len2 + 1; i++) {
    H[0][i] = 0;
    T[0][i] = dir.none;
  }

  for (i = 0; i < len1 + 1; i++) {
    if (!H[i]) {
      H[i] = [];
      T[i] = [];
    }

    H[i][0] = 0;
    T[i][0] = dir.none;
  }

  for (i = 1; i < len1 + 1; i++) {
    for (j = 1; j < len2 + 1; j++) {
      mmscore = mmatch(H, i, j, seq1, seq2, simfunc);
      delscore = deletion(H, i, j, gss);
      inscore = insertion(H, i, j, gss);

      H[i][j] = Math.max(0, mmscore, delscore, inscore);
      T[i][j] = defdir(H[i][j], mmscore, delscore, inscore);
    }
  }

  longestmatch = restorelm(H, T);

  return longestmatch;
}

module.exports = sw;