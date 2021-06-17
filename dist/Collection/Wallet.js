"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const Wallet_1 = require("../Model/Wallet");
class CollectionWallet extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'wallet';
        this.model = Wallet_1.default;
    }
}
exports.default = CollectionWallet;
//# sourceMappingURL=Wallet.js.map