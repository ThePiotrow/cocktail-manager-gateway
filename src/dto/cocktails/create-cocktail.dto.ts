import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateCocktailIngredientDto } from "./create-cocktail_ingredient.dto";
import { CreateCocktailPriceDto } from "./create-cocktail_price.dto";
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
    @ValidateNested({ each: true })
    @Type(() => CreateCocktailPriceDto)
    cocktailPrices: CreateCocktailPriceDto[];

    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => CreateCocktailIngredientDto)
    cocktailIngredients: CreateCocktailIngredientDto[];

    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => CreateCocktailStepDto)
    cocktailSteps: CreateCocktailStepDto[];

}
