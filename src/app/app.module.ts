import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UppercaseFirstLetterPipe } from './uppercase-first-letter.pipe';
import { MainComponent } from './main/main.component';
import { RecipeApiService } from './recipe-api.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    UppercaseFirstLetterPipe,
    MainComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
