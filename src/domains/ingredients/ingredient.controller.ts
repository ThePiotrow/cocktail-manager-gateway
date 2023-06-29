import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller('ingredients')
export class IngredientController {
    public constructor(@Inject('COCKTAILS_SERVICE') private readonly cocktailsProxy: ClientProxy) { }

    @Get()
    public async getCocktails() {
        return this.cocktailsProxy.send('findAllCocktail', {});
    }

    @Post()
    public async createCocktail() {
        return this.cocktailsProxy.send('createCocktail', {});
    }


}
