import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingriedient[];
}

interface Ingriedient {
  name: string;
  value: string;
}

interface Person {
  name: string;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnDestroy, OnInit, AfterViewInit {
  @Output() public inputHasChange = new EventEmitter<number>();

  public recipes: Recipe[] = [];

  @ViewChild('dada') public ratingParagraphElement!: ElementRef<HTMLParagraphElement>;

  ngOnInit() {
    setTimeout(() => {
      this.inputHasChange.emit(213);
    }, 2000);

    console.log(this.ratingParagraphElement);

    fetch('http://localhost:3000/recipes')
      .then((res) => res.json())
      .then((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngAfterViewInit() {
    console.log(this.ratingParagraphElement);
  }

  ngOnDestroy() {
    console.log('boom');
  }

  public check(e: any) {
    console.log(e);
  }

  public uppercaseFirstLetter(str: string) {
    console.log(str);
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
}
