import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

export interface Recipe {
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
  providers: [RecipeApiService],
})
export class RecipeListComponent
  implements OnDestroy, OnInit, AfterViewInit
{
  @Output() public inputHasChange = new EventEmitter<number>();

  public recipes: Recipe[] = [];

  @ViewChild('dada')
  public ratingParagraphElement!: ElementRef<HTMLParagraphElement>;

  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit() {
    this.recipeApiService.getRecipes().subscribe((result) => {
      this.recipes = result;
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
}
