import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UppercaseFirstLetterPipe } from './uppercase-first-letter.pipe';
import { MainComponent } from './main/main.component';
import { RatingPipe } from './recipe-tile/rating.pipe';
import { RecipeTileComponent } from './recipe-tile/recipe-tile.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [AppComponent, RecipeListComponent, UppercaseFirstLetterPipe, MainComponent, RecipeTileComponent, RatingPipe, RecipeDetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
