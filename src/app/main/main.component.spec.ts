import { HttpClientTestingModule } from '@angular/common/http/testing';
import { render } from '@testing-library/angular';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { MainComponent } from './main.component';
import { MockComponent } from 'ng-mocks';
describe('MainComponent', () => {
  test('app-recipe-list is visible', async () => {
    const result = await render(MainComponent, {
      imports: [HttpClientTestingModule],
      declarations: [MockComponent(RecipeListComponent)],
    });

    expect(
      result.container.querySelector('app-recipe-list')
    ).not.toBeNull();
  });
});
