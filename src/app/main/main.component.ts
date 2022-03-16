import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ok = false;

  constructor() {}

  ngOnInit(): void {}

  destroy() {
    this.ok = !this.ok;
  }

  log(event: number) {
    console.log('log', event);
  }
}
