import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-tile[recipe]',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss'],
})
export class RecipeTileComponent {
  @Input() public recipe!: Recipe;
}
