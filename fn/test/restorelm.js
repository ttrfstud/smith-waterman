var restorelm = require('../restorelm');
var assert = require('assert');

var dir = require('../../obj/dir');

describe('restorelm', function () {
	it('test, normal diagonal walk', function (done) {
		var H, T;

		H = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 0],
			[0, 0, 2, 0, 0, 0, 0],
			[0, 0, 0, 3, 0, 0, 0],
			[0, 0, 0, 0, 4, 0, 0],
			[0, 0, 0, 0, 0, 5, 0],
			[0, 0, 0, 0, 0, 0, 6]
		];

		T = [
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.diag, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.diag, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.diag, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.diag, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.diag, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.diag]
		];

		assert.deepEqual(restorelm(H, T), [
			{i: 5, j: 5}, 
			{i: 4, j: 4}, 
			{i: 3, j: 3}, 
			{i: 2, j: 2}, 
			{i: 1, j: 1}, 
			{i: 0, j: 0}
		]);

		done();
	});

	it('test, normal horizontal walk', function (done) {
		var H, T;

		H = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 2, 3, 4, 5, 6]
		];

		T = [
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.left, dir.left, dir.left, dir.left, dir.left, dir.left]
		];

		assert.deepEqual(restorelm(H, T), [
			{i: 5, j: 5}, 
			{i: 5, j: 4}, 
			{i: 5, j: 3}, 
			{i: 5, j: 2}, 
			{i: 5, j: 1}, 
			{i: 5, j: 0}
		]);

		done();
	});

	it('test, normal vertical walk', function (done) {
		var H, T;

		H = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 0, 2],
			[0, 0, 0, 0, 0, 0, 3],
			[0, 0, 0, 0, 0, 0, 4],
			[0, 0, 0, 0, 0, 0, 5],
			[0, 0, 0, 0, 0, 0, 6]
		];

		T = [
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up],
			[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up]
		];

		assert.deepEqual(restorelm(H, T), [
			{j: 5, i: 5}, 
			{j: 5, i: 4}, 
			{j: 5, i: 3}, 
			{j: 5, i: 2}, 
			{j: 5, i: 1}, 
			{j: 5, i: 0}
		]);

		done();
	});

	it('test, mixed walk', function (done) {
		var H, T;

		H = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 1],
			[0, 1, 1, 0, 0, 0, 2],
			[0, 0, 0, 2, 0, 0, 3],
			[0, 0, 0, 0, 3, 4, 4],
			[0, 0, 0, 0, 0, 5, 5],
			[0, 0, 0, 0, 0, 0, 6]
		];

		T = [
			/* 0 */[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			/* 1 */[dir.none, dir.diag, dir.none, dir.none, dir.none, dir.none, dir.up],
			/* 2 */[dir.none, dir.up,   dir.left, dir.none, dir.none, dir.none, dir.up],
			/* 3 */[dir.none, dir.none, dir.none, dir.diag, dir.none, dir.none, dir.up],
			/* 4 */[dir.none, dir.none, dir.none, dir.none, dir.diag, dir.left, dir.up],
			/* 5 */[dir.none, dir.none, dir.none, dir.none, dir.none, dir.up, dir.left],
			/* 6 */[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up]
		];

		assert.deepEqual(restorelm(H, T), [
			{j: 5, i: 5}, 
			{j: 5, i: 4}, 
			{j: 4, i: 4}, 
			{j: 4, i: 3}, 
			{j: 3, i: 3}, 
			{j: 2, i: 2},
			{j: 1, i: 1},
			{j: 0, i: 1},
			{j: 0, i: 0},
		]);

		done();
	});

	it('test, interrupted mixed walk', function (done) {
		var H, T;

		H = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 1],
			[0, 1, 1, 0, 0, 0, 2],
			[0, 0, 0, 0, 0, 0, 3],
			[0, 0, 0, 0, 3, 4, 4],
			[0, 0, 0, 0, 0, 5, 5],
			[0, 0, 0, 0, 0, 0, 6]
		];

		T = [
			/* 0 */[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.none],
			/* 1 */[dir.none, dir.diag, dir.none, dir.none, dir.none, dir.none, dir.up],
			/* 2 */[dir.none, dir.up,   dir.left, dir.none, dir.none, dir.none, dir.up],
			/* 3 */[dir.none, dir.none, dir.none, dir.diag, dir.none, dir.none, dir.up],
			/* 4 */[dir.none, dir.none, dir.none, dir.none, dir.diag, dir.left, dir.up],
			/* 5 */[dir.none, dir.none, dir.none, dir.none, dir.none, dir.up, dir.left],
			/* 6 */[dir.none, dir.none, dir.none, dir.none, dir.none, dir.none, dir.up]
		];

		assert.deepEqual(restorelm(H, T), [
			{j: 5, i: 5}, 
			{j: 5, i: 4}, 
			{j: 4, i: 4}, 
			{j: 4, i: 3}, 
			{j: 3, i: 3} 
		]);

		done();
	});

	it('test, hypotetic walk to border');
});