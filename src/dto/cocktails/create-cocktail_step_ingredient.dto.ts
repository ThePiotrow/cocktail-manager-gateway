import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateCocktailStepIngredientDto {

    @IsNotEmpty()
    @IsUUID()
    cocktailStep: string;

    @IsNotEmpty()
    @IsUUID()
    ingredient: string;

    @IsNotEmpty()
    @IsNumber()
    position: number;

    @IsNotEmpty()
    @IsString()
    description: string;
}
