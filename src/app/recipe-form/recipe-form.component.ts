import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeFormService } from './recipe-form.service';

export interface MyFormValue {
  title: string;
  description: string;
}

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  formAddRecipe!: FormGroup;

  constructor(private formBuild: FormBuilder, private recipeFormService: RecipeFormService) {}

  ngOnInit(): void {
    this.formAddRecipe = this.recipeFormService.createForm();
  }
  get ingredients() {
    return this.formAddRecipe.controls['ingredients'] as FormArray;
  }
  get ingredientsControl() {
    return this.ingredients.controls as FormGroup[];
  }
  addIngredient() {
    this.ingredients.push(
      new FormGroup({
        ingredientName: this.formBuild.control('', [Validators.required]),
        ingredientAmount: this.formBuild.control('', [Validators.required]),
      })
    );
  }

  goForward() {
    this.formAddRecipe.markAllAsTouched();

    if (this.formAddRecipe.invalid) {
      alert('bład w formularzu');
      return;
    }

    console.log(this.formAddRecipe.value, this.formAddRecipe.valid);
  }

  // public addMovie() {
  //   this.moviesFormArray.push(new FormControl(''));
  // }

  // public removeItemFromArray(array: FormArray, index: number) {
  //   array.removeAt(index);
  // }

  // public addMovieWithRating() {
  //   this.moviesWithRatingsFormArray.push(
  //     new FormGroup({
  //       movieName: this.formBuild.control(''),
  //       rating: this.formBuild.control(''),
  //     })
  //   );
  // }
}
