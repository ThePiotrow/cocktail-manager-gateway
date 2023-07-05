import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCocktailDto } from 'src/dto/cocktails/create-cocktail.dto';
import { UpdateCocktailDto } from 'src/dto/cocktails/update-cocktail.dto';
import { CreateCocktailIngredientDto } from 'src/dto/cocktails/create-cocktail_ingredient.dto';
import { UpdateCocktailIngredientDto } from 'src/dto/cocktails/update-cocktail_ingredient.dto';
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCocktailDto: UpdateCocktailDto) {
        return this.cocktailsProxy.send('updateCocktail', { id, ...updateCocktailDto });
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cocktailsProxy.send('removeCocktail', id);
    }

    @Post(':cocktailId/steps')
    createStep(@Param('cocktailId') cocktailId: string, @Body() createCocktailStepDto: CreateCocktailStepDto) {
        return this.cocktailsProxy.send('createCocktailStep', { cocktailId, ...createCocktailStepDto });
    }

    @Patch(':cocktailId/steps/:stepId')
    updateStep(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string, @Body() updateCocktailStepDto: UpdateCocktailIngredientDto) {
        return this.cocktailsProxy.send('updateCocktailStep', { cocktailId, stepId, ...updateCocktailStepDto });
    }

    @Delete(':cocktailId/steps/:stepId')
    removeStep(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string) {
        return this.cocktailsProxy.send('removeCocktailStep', { cocktailId, stepId });
    }

    @Post(':cocktailId/steps/:stepId/ingredients')
    createStepIngredient(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string, @Body() createCocktailStepIngredientDto: CreateCocktailIngredientDto) {
        return this.cocktailsProxy.send('createCocktailStepIngredient', { cocktailId, stepId, ...createCocktailStepIngredientDto });
    }

    @Get(':cocktailId/steps/:stepId/ingredients')
    findAllStepIngredients(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string) {
        return this.cocktailsProxy.send('findAllCocktailStepIngredients', { cocktailId, stepId });
    }

    @Patch(':cocktailId/steps/:stepId/ingredients/:ingredientId')
    updateStepIngredient(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string, @Param('ingredientId') ingredientId: string, @Body() updateCocktailStepIngredientDto: UpdateCocktailIngredientDto) {
        return this.cocktailsProxy.send('updateCocktailStepIngredient', { cocktailId, stepId, ingredientId, ...updateCocktailStepIngredientDto });
    }

    @Delete(':cocktailId/steps/:stepId/ingredients/:ingredientId')
    removeStepIngredient(@Param('cocktailId') cocktailId: string, @Param('stepId') stepId: string, @Param('ingredientId') ingredientId: string) {
        return this.cocktailsProxy.send('removeCocktailStepIngredient', { cocktailId, stepId, ingredientId });
    }

}
