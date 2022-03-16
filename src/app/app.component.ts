import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ok = true;

  destroy() {
    this.ok = !this.ok;
  }

  log(event: number) {
    console.log('log', event);
  }
}
