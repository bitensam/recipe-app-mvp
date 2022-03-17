import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RecipeApiService } from './recipe-api.service';

describe('RecipeApiService', () => {
  let service: RecipeApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeApiService],
    });
    service = TestBed.inject(RecipeApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();

    service.getRecipes().subscribe((res) => {
      console.log(res);
      expect(res).toEqual(['a']);
      done();
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/recipes',
    });

    req.flush(['a']);
  });
});
