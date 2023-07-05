import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateCocktailStepIngredientDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    ingredient: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    position: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;
}
