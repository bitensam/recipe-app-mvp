import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Recipe } from './recipe-list/recipe-list.component';

@Injectable()
export class RecipeApiService implements OnDestroy {
  constructor(private http: HttpClient) {
    console.log('created!');
  }

  public getRecipes() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  public ngOnDestroy() {
    console.log('boom service');
  }
}
