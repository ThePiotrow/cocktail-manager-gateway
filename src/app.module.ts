import { Module } from '@nestjs/common';
import { CocktailModule } from './domains/cocktails/cocktail.module';
import { IngredientModule } from './domains/ingredients/ingredient.module';
import { RecipeModule } from './domains/recipes/recipe.module';
import { AuthModule } from './domains/auth/auth.module';
import { UserModule } from './domains/users/user.module';

@Module({
  imports: [
    CocktailModule,
    IngredientModule,
    RecipeModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule { }
