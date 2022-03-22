import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface MyFormValue {
  name: string;
  isAdult: boolean;
}

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  form!: FormGroup;

  private _name = 'kamil';

  get name(): string {
    console.log('getValue from this.name');
    return this._name;
  }

  set name(value: string) {
    console.error('ziomek nie nadpiszesz!');
  }

  get moviesWithRatingsFormArray() {
    return this.form.controls['moviesWithRatings'] as FormArray;
  }

  get moviesWithRatingControls() {
    return this.moviesWithRatingsFormArray.controls as FormGroup[];
  }

  get moviesFormArray() {
    return this.form.controls['movies'] as FormArray;
  }

  get moviesControls() {
    return this.moviesFormArray.controls as FormGroup[];
  }

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    // console.log(this.name);

    // this.name = 'Artur';

    // console.log(this.name);

    this.form = this.createForm();
  }

  goForward() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      alert('bład w formularzu');
      return;
    }

    console.log(this.form.value, this.form.valid);
  }

  public addMovie() {
    this.moviesFormArray.push(new FormControl(''));
  }

  public removeItemFromArray(array: FormArray, index: number) {
    array.removeAt(index);
  }

  public addMovieWithRating() {
    this.moviesWithRatingsFormArray.push(
      new FormGroup({
        movieName: this.formBuild.control(''),
        rating: this.formBuild.control(''),
      })
    );
  }

  private createForm() {
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
