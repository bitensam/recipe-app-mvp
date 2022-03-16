import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UppercaseFirstLetterPipe } from './uppercase-first-letter.pipe';

@NgModule({
  declarations: [AppComponent, RecipeListComponent, UppercaseFirstLetterPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
