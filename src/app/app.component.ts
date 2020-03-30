import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navbarOpen:boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
