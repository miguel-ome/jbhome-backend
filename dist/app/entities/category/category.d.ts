import { Replace } from '@app/helpers/relpace';
export interface CategorySchema {
    name: string;
    createdAt: Date;
    updatedAt?: Date | null;
}
export declare class Category {
    private _id;
    private props;
    private validateName;
    constructor(props: Replace<CategorySchema, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    get name(): string;
    set name(value: string);
    get createdAt(): Date;
    get updatedAt(): Date | null;
    private update;
}
