import { Component, signal, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonButton, Icon } from "./buttons/common-button/common-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router){}

  Icon = Icon;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      }
    );
  }
}
