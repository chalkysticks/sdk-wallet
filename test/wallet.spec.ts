import { expect } from 'chai';
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
	}
});


describe('Wallet - Local', () => {
    it('should have a transaction', () => {
        expect(walletModel.getTransaction()).to.be.a('number');
    });

    it('should have a user', () => {
        expect(walletModel.user).to.be.an('object');
		expect(walletModel.user.getName()).to.be.a('string');
    });
});
