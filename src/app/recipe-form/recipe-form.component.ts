import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../login/login.component';
import { RecipeApiService } from '../recipe-list/recipe-api.service';
import { UserService } from '../user.service';
import { RecipeFormService } from './recipe-form.service';

export interface RecipeFormValue {
  name: string;
  description: string;
  ingriedients: { name: string; value: string }[];
}

export interface RecipeJSON {
  name: string;
  description: string;
  ingriedients: { name: string; value: string }[];
  rating: number;
  authorId: number;
}

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  formAddRecipe!: FormGroup;
  recipeJSON: RecipeJSON | null = null;
  userId: number | null = null;

  constructor(
    private formBuild: FormBuilder,
    private recipeFormService: RecipeFormService,
    private recipeApiService: RecipeApiService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formAddRecipe = this.recipeFormService.createForm();
  }
  get ingriedients() {
    return this.formAddRecipe.controls['ingriedients'] as FormArray;
  }
  get ingriedientsControl() {
    return this.ingriedients.controls as FormGroup[];
  }
  addIngredient() {
    this.ingriedients.push(
      new FormGroup({
        name: this.formBuild.control('', [Validators.minLength(3)]),
        value: this.formBuild.control('', [Validators.minLength(1)]),
      })
    );
  }

  goForward() {
    this.formAddRecipe.markAllAsTouched();

    if (this.formAddRecipe.invalid) {
      alert('bład w formularzu');
      return;
    }
    this.userService.user$.subscribe((user) => {
      this.userId = user!.id;
    });
    this.recipeJSON = { ...this.formAddRecipe.value, rating: 2, authorId: this.userId };
    console.log(this.recipeJSON);
  }

  ngOnDestroy() {}
}
