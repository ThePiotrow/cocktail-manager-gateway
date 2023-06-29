import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'COCKTAILS_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'cocktail', //Docker service name
                    port: 7000,
                },
            },
        ]),
    ],
    controllers: [RecipeController],
    providers: [],
})
export class RecipeModule { }
