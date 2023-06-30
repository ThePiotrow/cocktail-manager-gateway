import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class CreateCocktailPriceDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    cocktailId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    isHappyHour: boolean;

}
