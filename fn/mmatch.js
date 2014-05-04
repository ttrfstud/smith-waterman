function mmatch(H, i, j, seq1, seq2, simfunc) {
  var prevres;
  var curres;
  var seq1cur, seq2cur;
  var simil;

  prevres = H[i - 1][j - 1];

  seq1cur = seq1[i - 1];
  seq2cur = seq2[j - 1];

  simil = simfunc(seq1cur, seq2cur);

  curres = prevres + simil;

  return curres;
}

module.exports = mmatch;