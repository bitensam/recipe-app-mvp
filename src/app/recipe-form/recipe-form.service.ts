import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MyFormValue } from './recipe-form.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeFormService {
  constructor(private formBuild: FormBuilder) {}

  public createForm() {
    const form = this.formBuild.group({
      name: this.formBuild.control('', [Validators.required]),
      isAdult: this.formBuild.control(false),
      idNumber: this.formBuild.control(''),
      movies: this.formBuild.array([new FormControl()]),
      moviesWithRatings: this.formBuild.array([
        this.formBuild.group({
          movieName: this.formBuild.control(''),
          rating: this.formBuild.control(''),
        }),
      ]),
    });

    form.controls['movies'] as FormArray;

    form.valueChanges.subscribe((formValue: MyFormValue) => {});

    form.controls['isAdult'].valueChanges.subscribe(
      (checked: boolean) => {
        const idNumberControl = form.controls['idNumber'];

        if (checked) {
          idNumberControl.addValidators([Validators.required]);
        } else {
          idNumberControl.clearValidators();
        }

        idNumberControl.updateValueAndValidity();
      }
    );

    return form;
  }
}
