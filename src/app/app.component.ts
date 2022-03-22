import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe-details/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedRecipeName = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipeName.subscribe((name) => {
      this.selectedRecipeName = name;
    });
  }
}
