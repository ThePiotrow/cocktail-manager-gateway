import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCocktailDto } from 'src/dto/cocktails/create-cocktail.dto';
import { UpdateCocktailDto } from 'src/dto/cocktails/update-cocktail.dto';
import { CreateCocktailIngredientDto } from 'src/dto/cocktails/create-cocktail_ingredient.dto';
import { UpdateCocktailIngredientDto } from 'src/dto/cocktails/update-cocktail_ingredient.dto';
import { CreateCocktailPriceDto } from 'src/dto/cocktails/create-cocktail_price.dto';
import { CreateCocktailStepDto } from 'src/dto/cocktails/create-cocktail_step.dto';

@Controller('cocktails')
export class CocktailController {
    public constructor(@Inject('COCKTAILS_SERVICE') private readonly cocktailsProxy: ClientProxy) { }

    @Post()
    create(@Body() createCocktailDto: CreateCocktailDto) {
        return this.cocktailsProxy.send('createCocktail', createCocktailDto);
    }

    @Get()
    findAll() {
        return this.cocktailsProxy.send('findAllCocktail', {});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cocktailsProxy.send('findOneCocktail', id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCocktailDto: UpdateCocktailDto) {
        return this.cocktailsProxy.send('updateCocktail', { id, ...updateCocktailDto });
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cocktailsProxy.send('removeCocktail', id);
    }

    @Post(':cocktailId/ingredients')
    createIngredient(@Param('cocktailId') cocktailId: string, @Body() createCocktailIngredientDto: CreateCocktailIngredientDto) {
        return this.cocktailsProxy.send('createCocktailIngredient', { cocktailId, ...createCocktailIngredientDto });
    }

    @Get(':cocktailId/ingredients')
    findAllIngredients(@Param('cocktailId') cocktailId: string) {
        return this.cocktailsProxy.send('findAllCocktailIngredients', cocktailId);
    }

    @Patch(':cocktailId/ingredients/:ingredientId')
    updateIngredient(@Param('cocktailId') cocktailId: string, @Param('ingredientId') ingredientId: string, @Body() updateCocktailIngredientDto: UpdateCocktailIngredientDto) {
        return this.cocktailsProxy.send('updateCocktailIngredient', { cocktailId, ingredientId, ...updateCocktailIngredientDto });
    }

    @Delete(':cocktailId/ingredients/:ingredientId')
    removeIngredient(@Param('cocktailId') cocktailId: string, @Param('ingredientId') ingredientId: string) {
        return this.cocktailsProxy.send('removeCocktailIngredient', { cocktailId, ingredientId });
    }

    @Post(':cocktailId/prices')
    createPrice(@Param('cocktailId') cocktailId: string, @Body() createCocktailPriceDto: CreateCocktailPriceDto) {
        return this.cocktailsProxy.send('createCocktailPrice', { cocktailId, ...createCocktailPriceDto });
    }

    @Get(':cocktailId/prices')
    findAllPrices(@Param('cocktailId') cocktailId: string) {
        return this.cocktailsProxy.send('findAllCocktailPrices', cocktailId);
    }

    @Patch(':cocktailId/prices/:priceId')
    updatePrice(@Param('cocktailId') cocktailId: string, @Param('priceId') priceId: string, @Body() updateCocktailPriceDto: UpdateCocktailIngredientDto) {
        return this.cocktailsProxy.send('updateCocktailPrice', { cocktailId, priceId, ...updateCocktailPriceDto });
    }

    @Delete(':cocktailId/prices/:priceId')
    removePrice(@Param('cocktailId') cocktailId: string, @Param('priceId') priceId: string) {
        return this.cocktailsProxy.send('removeCocktailPrice', { cocktailId, priceId });
    }

    @Post(':cocktailId/steps')
    createStep(@Param('cocktailId') cocktailId: string, @Body() createCocktailStepDto: CreateCocktailStepDto) {
        return this.cocktailsProxy.send('createCocktailStep', { cocktailId, ...createCocktailStepDto });
    }

    @Get(':cocktailId/steps')
    findAllSteps(@Param('cocktailId') cocktailId: string) {
        return this.cocktailsProxy.send('findAllCocktailSteps', cocktailId);
    }

    @Patch(':cocktailId/steps/:stepId')
    updateStep(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string, @Body() updateCocktailStepDto: UpdateCocktailIngredientDto) {
        return this.cocktailsProxy.send('updateCocktailStep', { cocktailId, stepId, ...updateCocktailStepDto });
    }

}
