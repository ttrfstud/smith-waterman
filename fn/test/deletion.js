var assert = require('assert');
var deletion = require('../deletion');

describe('deletion', function () {
	it('test, 1 step', function (done) {
		var H;
		var i, j;
		var gss;
		var res;

		gss = function (i) {
			return -i;
		};

		H = [
			[0, 3],
			[0, 4],
			[0, 2],
			[0, 7],
			[0, NaN],
		];

		i = 4;
		j = 1;

		res = deletion(H, i, j, gss);

		assert.equal(res, 6);

		done();
	});

	it('test, 1 step, 2', function (done) {
		var H;
		var i, j;
		var gss;
		var res;

		gss = function (i) {
			return 50;
		};

		H = [
			[0, 3],
			[0, 4],
			[0, 2],
			[0, 7],
			[0, NaN],
		];

		i = 4;
		j = 1;

		res = deletion(H, i, j, gss);

		assert.equal(res, 57);

		done();
	});

	it('test, some steps, 1', function (done) {
		var H;
		var i, j;
		var gss;
		var res;

		gss = function (i) {
			return 50 * i;
		};

		H = [
			[0, 3],
			[0, 40],
			[0, 2],
			[0, 7],
			[0, NaN],
		];

		i = 4;
		j = 1;

		res = deletion(H, i, j, gss);

		assert.equal(res, 190);

		done();
	});

	it('test, some steps, 2', function (done) {
		var H;
		var i, j;
		var gss;
		var res;

		gss = function (i) {
			return -3 * i;
		};

		H = [
			[0, 3],
			[0, 0],
			[0, 18],
			[0, 0],
			[0, 2],
			[0, 7],
			[0, NaN],
		];

		i = 6;
		j = 1;

		res = deletion(H, i, j, gss);

		assert.equal(res, 6);

		done();
	});
});