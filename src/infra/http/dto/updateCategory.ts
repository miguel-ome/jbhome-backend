import { IsString, MinLength } from 'class-validator';

export class UpdateCategoryDTO {
  @IsString()
  id: string;

  @IsString()
  @MinLength(3, { message: 'Insira no mínimo 3 caracteres' })
  name: string;
}
