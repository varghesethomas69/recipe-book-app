import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'My first recipe', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Moqueca.jpg'),
    new Recipe('Second Recipe', 'My second recipe', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Moqueca.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
