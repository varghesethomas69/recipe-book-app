import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListServie} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'My first recipe',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Moqueca.jpg',
      [
        new Ingredient('Chicken', 5),
        new Ingredient('Coconut Milk', 2)
      ]),
    new Recipe(
      'Second Recipe',
      'My second recipe',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Moqueca.jpg',
      [
        new Ingredient('Beef', 3),
        new Ingredient('Bell Pepper', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListServie) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
