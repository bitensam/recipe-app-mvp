import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Role } from '../role.enum';
import { SelectOption } from '../select-option.interface';
import { UserService } from '../user.service';
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
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];
  public sortedRecipes: Recipe[] = [];
  public filteredRecipes: Recipe[] = [];
  userRole: Role | null = null;
  userId: number | null = null;

  searchText = new FormControl('');
  sortValue = new FormControl(null);
  public sortOptions = this.recipeListService.getRecipeListSortOptions();

  constructor(private recipeApiService: RecipeApiService, private recipeListService: RecipeListService, private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.userRole = user!.role;
      this.userId = user!.id;
    });

    if (this.userRole === 'author') {
      this.recipeApiService.getAuthorOnlyRecipes(this.userId!).subscribe((result) => {
        this.recipes = [...result];
      });
    } else {
      this.recipeApiService.getAllRecipes().subscribe((result) => {
        this.recipes = [...result];
      });
    }
  }

  onChangeSortOption() {
    console.log(this.sortValue.value);
    this.recipeApiService.sortRecipes(this.sortValue.value).subscribe((result) => {
      this.recipes = [...result];
    });
  }
}
