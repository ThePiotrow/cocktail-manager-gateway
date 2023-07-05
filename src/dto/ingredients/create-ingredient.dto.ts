import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateIngredientDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    unit: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    allergen: boolean;

    @ApiProperty()
    @IsNumber()
    stock: number;

    @ApiProperty()
    @IsNumber()
    stockAlert: number;

}
