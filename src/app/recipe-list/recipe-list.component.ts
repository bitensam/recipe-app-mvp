import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipeApiService } from './recipe-api.service';
import { RecipeListService } from './recipe-list.service';

export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingriedient[];
}

interface Ingriedient {
  name: string;
  value: string;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  public recipes: Recipe[] = [];
  searchText = new FormControl('');
  public sortOptions = this.recipeListService.getRecipeListSortOptions();

  constructor(private recipeApiService: RecipeApiService, private recipeListService: RecipeListService) {}

  ngOnInit() {
    this.recipeApiService.getRecipes().subscribe((result) => {
      this.recipes = [...result, ...result, ...result];
    });
  }
}
