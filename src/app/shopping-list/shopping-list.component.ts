import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListServie} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListServie) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredient: Ingredient[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
