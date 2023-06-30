import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailStepDto } from './create-cocktail_step.dto';
import { IsUUID } from 'class-validator';

export class UpdateCocktailStepDto extends PartialType(CreateCocktailStepDto) {
  @IsUUID()
  id: string;
}
