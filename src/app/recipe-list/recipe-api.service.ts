import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  constructor(private http: HttpClient) {}

  public getAllRecipes() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  public getAuthorOnlyRecipes(authorId: number) {
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?id=${authorId}`);
  }

  public postRecipes(recipe: Recipe) {
    return this.http.post<Recipe>('http://localhost:3000/recipes', recipe);
  }
  public sortRecipes(selectValue: string) {
    const splitedSelectOption = selectValue.split(',');

    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?_sort=${splitedSelectOption[0]}&_order=${splitedSelectOption[1]}`);
  }
  public filterRecipes(enteredText: string) {
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?name_like=${enteredText}`);
  }
}
