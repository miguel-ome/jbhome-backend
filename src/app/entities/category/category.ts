import { Replace } from '@app/helpers/relpace';
import { randomUUID } from 'crypto';

interface CategorySchema {
  name: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Category {
  _id: string;
  props: CategorySchema;

  validateName(name: string): boolean {
    return name.length <= 1 ? false : true;
  }

  constructor(
    props: Replace<CategorySchema, { createdAt?: Date }>,
    id?: string,
  ) {
    const categoryIsValid = this.validateName(props.name);
    if (!categoryIsValid) throw new Error('Name with invalid format');
    this._id = id || randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(value: string) {
    this.props.name = value;
    this.props.updatedAt = new Date();
  }
}
