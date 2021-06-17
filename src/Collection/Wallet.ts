import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelWallet from '../Model/Wallet';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionWallet                                                           │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-Wallet                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionWallet extends CollectionBase {
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
     * @type ModelWallet
     */
    public model: any = ModelWallet;
}
