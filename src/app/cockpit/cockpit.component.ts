import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
