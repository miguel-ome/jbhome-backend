import { IsString } from 'class-validator';

export class DeleteCategoryDTO {
  @IsString()
  id: string;
}
