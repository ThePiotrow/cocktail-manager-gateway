import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateIngredientDto } from 'src/dto/ingredients/create-ingredient.dto';
import { UpdateIngredientDto } from 'src/dto/ingredients/update-ingredient.dto';
@Controller('ingredients')
export class IngredientController {
    public constructor(@Inject('COCKTAILS_SERVICE') private readonly cocktailsProxy: ClientProxy) { }

    @Post()
    create(@Body() createIngredientDto: CreateIngredientDto) {
        return this.cocktailsProxy.send('createIngredient', createIngredientDto);
    }

    @Get()
    findAll() {
        return this.cocktailsProxy.send('findAllIngredient', {});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cocktailsProxy.send('findOneIngredient', id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
        return this.cocktailsProxy.send('updateIngredient', { id, ...updateIngredientDto });
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cocktailsProxy.send('removeIngredient', id);
    }
}
