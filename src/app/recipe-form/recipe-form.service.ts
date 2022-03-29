import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyFormValue } from './recipe-form.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeFormService {
  constructor(private formBuild: FormBuilder) {}

  public createForm() {
    const form = this.formBuild.group({
      title: this.formBuild.control('', [Validators.required]),
      description: this.formBuild.control('', [Validators.minLength(20)]),
      ingredients: this.formBuild.array([
        this.formBuild.group({
          ingredientName: this.formBuild.control('', [Validators.required]),
          ingredientAmount: this.formBuild.control('', [Validators.required]),
        }),
      ]),
    });

    form.controls['ingredients'] as FormArray;

    form.valueChanges.subscribe((formValue: MyFormValue) => {});

    return form;
  }
}
