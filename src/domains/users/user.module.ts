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
                    host: process.env.AUTH_HOST, //Docker service name
                    port: parseInt(process.env.AUTH_PORT),
                },
            },
        ]),
        JwtModule
    ],
    controllers: [UserController],
    providers: [],
})
export class UserModule { }
