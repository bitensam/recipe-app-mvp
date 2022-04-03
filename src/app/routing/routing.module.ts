import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { Role } from '../shared/enums/role.enum';
import { RoleGuard } from '../shared/guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      { path: 'recipe-add', component: RecipeFormComponent, canActivate: [RoleGuard], data: { roles: [Role.Author] } },
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
