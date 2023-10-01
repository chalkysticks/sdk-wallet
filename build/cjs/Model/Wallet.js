"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
class Wallet extends sdk_core_1.Model.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'userwallet';
        this.fields = [
            'id',
            'user_id',
            'challenger_id',
            'transaction',
            'source',
            'source_id',
            'created_at',
            'updated_at',
        ];
    }
    get user() {
        return this.hasOne('user', sdk_core_1.Model.User);
    }
    get challenger() {
        return this.hasOne('challenger', sdk_core_1.Model.User);
    }
    getSource() {
        return this.attr('source');
    }
    getTransaction() {
        return this.attr('transaction');
    }
    getCreatedAt() {
        return this.attr('created_at');
    }
    getUpdatedAt() {
        return this.attr('updated_at');
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVsL1dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBK0M7QUFRL0MsTUFBYSxNQUFPLFNBQVEsZ0JBQUssQ0FBQyxJQUFJO0lBQXRDOztRQU9XLGFBQVEsR0FBVyxZQUFZLENBQUM7UUFPaEMsV0FBTSxHQUFhO1lBQ3RCLElBQUk7WUFDSixTQUFTO1lBQ1QsZUFBZTtZQUNyQixhQUFhO1lBQ2IsUUFBUTtZQUNSLFdBQVc7WUFDTCxZQUFZO1lBQ1osWUFBWTtTQUNmLENBQUM7SUFtRE4sQ0FBQztJQTlDRyxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGdCQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGdCQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQWNNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFXLENBQUM7SUFDekMsQ0FBQztJQUtNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVyxDQUFDO0lBQzlDLENBQUM7SUFLTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDO0lBQzdDLENBQUM7SUFLTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDO0lBQzdDLENBQUM7Q0FHSjtBQTFFRCx3QkEwRUMifQ==