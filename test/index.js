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
});