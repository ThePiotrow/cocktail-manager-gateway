import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AUTH_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'auth', //Docker service name
                    port: 5000,
                },
            },
        ]),
        JwtModule
    ],
    controllers: [UserController],
    providers: [],
})
export class UserModule { }