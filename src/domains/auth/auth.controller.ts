import { Controller, Get, Inject, Post, Body, Headers } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'src/dto/users/login.dto';
import { RegisterDto } from 'src/dto/users/register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
<<<<<<< Updated upstream
  ) { }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.send('register', registerDto);
=======
  ) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.send('registerUser', registerDto);
>>>>>>> Stashed changes
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
<<<<<<< Updated upstream
    return this.authService.send('login', loginDto);
  }

  @Get('me')
  getOneUserByToken(@Headers('Authorization') token: string) {
    return this.authService.send('me', {
      token
    });
=======
    return this.authService.send('loginUser', loginDto);
>>>>>>> Stashed changes
  }
}
