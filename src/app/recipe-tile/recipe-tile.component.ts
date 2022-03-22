import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe-details/recipe.service';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-tile[recipe]',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss'],
})
export class RecipeTileComponent {
  @Input() public recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  select() {
    this.recipeService.selectedRecipeName.next(this.recipe.name);
  }
}
