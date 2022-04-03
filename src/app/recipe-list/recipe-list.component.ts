import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { Role } from '../shared/enums/role.enum';
import { UserService } from '../shared/services/user.service';
import { RecipeApiService } from '../shared/services/recipe-api.service';
import { RecipeListService } from './recipe-list.service';

export interface Recipe {
  name: string;
  id: number;
  description: string;
  rating: number;
  ingriedients: Ingriedient[];
  authorId: number;
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
    this.recipeApiService.sortRecipes(this.sortValue.value).subscribe((result) => {
      this.recipes = [...result];
    });
  }

  onSearch() {
    this.recipeApiService
      .filterRecipes(this.searchText.value)
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((result) => {
        this.recipes = [...result];
      });
  }
}
