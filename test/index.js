var assert = require('assert');
var sw = require('../');

describe('sw', function () {
	// http://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm#Example
	it('wikipedia test', function (done) {
		var seq1;
		var seq2;
		var simfunc;
		var gss;

		var res;

		seq2 = 'ACACACTA';
		seq1 = 'AGCACACA';

		simfunc = function (a, b) {
			if (a === b) {
				return 2;
			} else {
				return -1;
			}
		};

		gss = function (i) {
			return -i;
		};

		res = sw(seq1, seq2, gss, simfunc);

		assert.deepEqual(res, [
			{	i: 7, j: 7 },
			{ i: 6, j: 6 },
			{ i: 6, j: 5 },
			{ i: 5, j: 4 },
			{ i: 4, j: 3 },
			{ i: 3, j: 2 },
			{ i: 2, j: 1 },
			{ i: 1, j: 0 },
			{ i: 0, j: 0 }
		]);

		done();
	});

	// http://www.cmb.usc.edu/papers/msw_papers/msw-042.pdf
	it('paper test', function (done) {
		var seq1;
		var seq2;
		var simfunc;
		var gss;

		var res;

		seq1 = 'AAUGCCAUUGACGG';
		seq2 = 'CAGCCUCGCUUAG';

		simfunc = function (a, b) {
			if (a === b) {
				return 1;
			} else {
				return -1/3;
			}
		};

		gss = function (k) {
			return -(1.0 + 1/3 * k);
		};

		res = sw(seq1, seq2, gss, simfunc);

		assert.deepEqual(res, [
			{i: 9, j: 7},
			{i: 8, j: 6},
			{i: 7, j: 5},
			{i: 6, j: 4},
			{i: 5, j: 4},
			{i: 4, j: 3},
			{i: 3, j: 2}
		]);

		done();
	});
});