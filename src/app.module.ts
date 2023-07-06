import { Module } from '@nestjs/common';
import { CocktailModule } from './domains/cocktails/cocktail.module';
import { IngredientModule } from './domains/ingredients/ingredient.module';
import { AuthModule } from './domains/auth/auth.module';
import { UserModule } from './domains/users/user.module';
import { DefaultIfEmptyInterceptor } from './interceptor/defaultIfEmpty.interceptor'
import { APP_INTERCEPTOR } from '@nestjs/core'

@Module({
  imports: [
    CocktailModule,
    IngredientModule,
    AuthModule,
    UserModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DefaultIfEmptyInterceptor
    }
  ]
})
export class AppModule { }
