import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../../recipe-list/recipe-list.component';

@Pipe({
  name: 'appSearch',
})
export class SearchPipe implements PipeTransform {
  transform(items: Recipe[], searchText: string): Recipe[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
