import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {
  size:number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.size = this.userService.size;
  }

  onChange() {
    this.userService.setSize(this.size);
  }
}
