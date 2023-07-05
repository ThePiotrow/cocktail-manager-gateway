import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateCocktailIngredientDto } from "./create-cocktail_ingredient.dto";
import { CreateCocktailStepDto } from "./create-cocktail_step.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCocktailDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    // @IsNotEmpty()
    // image: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    HHPrice: number;

    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => CreateCocktailStepDto)
    cocktailSteps: CreateCocktailStepDto[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    managerId: string;

}
