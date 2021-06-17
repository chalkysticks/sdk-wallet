import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ ModelWallet                                                                │
 * │                                                                            │
 * │ @namespace Model                                                           │
 * │ @package   SDK-Wallet                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class ModelWallet extends ModelBase {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v3/wallet
     *
     * @type string
     */
    public endpoint: string = 'wallet';

    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
        'id',
        'created_at',
        'updated_at',
    ];


    // region: Getters
    // ---------------------------------------------------------------------------

    // endregion: Getters

}
