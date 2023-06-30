import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateCocktailStepDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    cocktailId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    position: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

}
