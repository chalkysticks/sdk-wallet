"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelWallet extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'wallet';
        this.fields = [
            'id',
            'created_at',
            'updated_at',
        ];
    }
}
exports.default = ModelWallet;
//# sourceMappingURL=Wallet.js.map