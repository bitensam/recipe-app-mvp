import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RecipeFormValue } from './recipe-form.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeFormService {
  constructor(private formBuild: FormBuilder) {}

  public createForm() {
    const form = this.formBuild.group({
      name: this.formBuild.control('', [Validators.minLength(3)]),
      description: this.formBuild.control('', [Validators.minLength(20)]),
      ingriedients: this.formBuild.array([
        this.formBuild.group({
          name: this.formBuild.control('', [Validators.minLength(3)]),
          value: this.formBuild.control('', [Validators.minLength(1)]),
        }),
      ]),
    });

    form.controls['ingriedients'] as FormArray;

    form.valueChanges.subscribe((formValue: RecipeFormValue) => {});

    return form;
  }
}
