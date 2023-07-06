import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailDto } from './create-cocktail.dto';
import { IsUUID } from 'class-validator';
import { UpdateCocktailStepDto } from './update-cocktail_step.dto';

export class UpdateCocktailDto extends PartialType(CreateCocktailDto) {
    @IsUUID()
    id: string;

    steps: UpdateCocktailStepDto[];
}
