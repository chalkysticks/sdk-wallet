import { Model } from '@chalkysticks/sdk-core';
export declare class Wallet extends Model.Base {
    endpoint: string;
    fields: string[];
    get user(): Model.User;
    get challenger(): Model.User;
    getSource(): string;
    getTransaction(): string;
    getCreatedAt(): string;
    getUpdatedAt(): string;
}
