import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class CreateIngredientDto {

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
