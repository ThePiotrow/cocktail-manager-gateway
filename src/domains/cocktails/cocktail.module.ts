import { Module } from '@nestjs/common';
import { CocktailController } from './cocktail.controller';
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
    controllers: [CocktailController],
    providers: [],
})
export class CocktailModule { }
