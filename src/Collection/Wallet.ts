import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class Wallet
 * @package Collection
 * @project ChalkySticks SDK Wallets
 */
export class Wallet extends Collection.Base<Model.Wallet> {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/wallet
     *
     * @type string
     */
    public endpoint: string = 'wallet';

    /**
     * Model object instantiated by this collection
     *
     * @type Model.Wallet
     */
    public model: Model.Wallet = new Model.Wallet();
}
