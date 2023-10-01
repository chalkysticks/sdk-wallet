import { Model } from '@chalkysticks/sdk-core';
export class Wallet extends Model.Base {
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
        return this.hasOne('user', Model.User);
    }
    get challenger() {
        return this.hasOne('challenger', Model.User);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVsL1dhbGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRL0MsTUFBTSxPQUFPLE1BQU8sU0FBUSxLQUFLLENBQUMsSUFBSTtJQUF0Qzs7UUFPVyxhQUFRLEdBQVcsWUFBWSxDQUFDO1FBT2hDLFdBQU0sR0FBYTtZQUN0QixJQUFJO1lBQ0osU0FBUztZQUNULGVBQWU7WUFDckIsYUFBYTtZQUNiLFFBQVE7WUFDUixXQUFXO1lBQ0wsWUFBWTtZQUNaLFlBQVk7U0FDZixDQUFDO0lBbUROLENBQUM7SUE5Q0csSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBY00sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQVcsQ0FBQztJQUN6QyxDQUFDO0lBS00sY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFXLENBQUM7SUFDOUMsQ0FBQztJQUtNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFXLENBQUM7SUFDN0MsQ0FBQztJQUtNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFXLENBQUM7SUFDN0MsQ0FBQztDQUdKIn0=