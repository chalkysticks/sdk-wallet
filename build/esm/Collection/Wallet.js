import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export class Wallet extends Collection.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'wallet';
        this.model = new Model.Wallet();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbGxlY3Rpb24vV2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsQ0FBQztBQU9sQyxNQUFNLE9BQU8sTUFBTyxTQUFRLFVBQVUsQ0FBQyxJQUFrQjtJQUF6RDs7UUFPVyxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBTzVCLFVBQUssR0FBaUIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEQsQ0FBQztDQUFBIn0=