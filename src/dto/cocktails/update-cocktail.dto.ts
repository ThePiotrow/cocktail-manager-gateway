import { PartialType } from '@nestjs/mapped-types';
import { CreateCocktailDto } from './create-cocktail.dto';
import { IsUUID } from 'class-validator';

export class UpdateCocktailDto extends PartialType(CreateCocktailDto) {
    @IsUUID()
    id: string;
}
