import { Injectable } from '@angular/core';
import { SelectOption } from '../select-option.interface';

type SortType = 'name,desc' | 'name,asc' | 'rate,desc' | 'rate,asc';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  getRecipeListSortOptions(): SelectOption<SortType | null>[] {
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
        value: 'rate,asc',
      },
      {
        label: 'Ocena 5-0',
        value: 'rate,desc',
      },
    ];
  }
}
