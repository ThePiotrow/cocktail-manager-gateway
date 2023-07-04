import { Controller, Get, Inject, Post, Body, Headers } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LoginDto } from 'src/dto/users/login.dto';
import { RegisterDto } from 'src/dto/users/register.dto';

@Controller('auth')
@ApiBearerAuth()
export class AuthController {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) { }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.send('register', registerDto);
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.send('login', loginDto);
    }

    @Get('me')
    getOneUserByToken(@Headers('Authorization') token: string) {
        return this.authService.send('me', {
            token
        });
    }
}
