import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class CreateCocktailIngredientDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    cocktailId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    ingredientId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;

}
