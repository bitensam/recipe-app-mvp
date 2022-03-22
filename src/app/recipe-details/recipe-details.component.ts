import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

const customValidator: (array: string[]) => ValidatorFn =
  (array: string[]) =>
  (control: AbstractControl): { customMessage: string } | null => {
    if (array.includes(control.value)) {
      return { customMessage: 'Customowy message' };
    }

    return null;
  };

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeNameControl = new FormControl(
    { value: '', disabled: false },
    [Validators.minLength(4), customValidator(['ryba'])]
  );

  ngOnInit(): void {
    console.log(this.recipeNameControl);

    (
      this.recipeNameControl.valueChanges as Observable<string>
    ).subscribe((value) => {
      console.log(value);
    });

    setTimeout(() => {
      this.recipeNameControl.setValue('ryba', {
        emitEvent: false,
      });
    }, 2000);
  }
}
