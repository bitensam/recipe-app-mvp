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
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { CockpitComponent } from './cockpit/cockpit.component';
import { SearchPipe } from './recipe-list/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    UppercaseFirstLetterPipe,
    MainComponent,
    RecipeTileComponent,
    RatingPipe,
    RecipeDetailsComponent,
    RecipeFormComponent,
    HeaderComponent,
    LoginComponent,
    CockpitComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
