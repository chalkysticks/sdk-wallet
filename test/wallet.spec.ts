import test from 'node:test';
import assert from 'node:assert/strict';
import { Collection, Model } from '../src';

// Setup
// ----------------------------------------------------------------------------

const walletModel: Model.Wallet = new Model.Wallet({
	user_id: 0,
	challenger_id: null,
	transaction: 60, // TODO Replace with enum
	source: 'checkin', // TODO Replace with enum
	source_id: null,
	user: {
		id: 1,
		name: 'Matt Kenefick',
		email: 'matt@chalkysticks.com',
	},
});

test('Wallet should have a transaction', () => {
	assert.equal(walletModel.getTransaction(), 60);
});

test('Wallet should have a user', () => {
	assert.equal(walletModel.user.getName(), 'Matt Kenefick');
});
