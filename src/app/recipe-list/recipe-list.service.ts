import { Injectable } from '@angular/core';
import { SelectOption } from '../shared/interfaces/select-option.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  getRecipeListSortOptions(): SelectOption[] {
    return [
      {
        label: 'Szukaj',
        value: null,
      },
      {
        label: 'Nazwa A-Z',
        value: 'name,asc',
      },
      {
        label: 'Nazwa Z-A',
        value: 'name,desc',
      },
      {
        label: 'Ocena 0-5',
        value: 'rating,asc',
      },
      {
        label: 'Ocena 5-0',
        value: 'rating,desc',
      },
    ];
  }
}
