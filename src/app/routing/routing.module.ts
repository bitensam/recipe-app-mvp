import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: 'recipe-add', component: RecipeFormComponent },
      { path: 'recipe-details', component: RecipeDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
