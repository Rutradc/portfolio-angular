import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-go-to-route-button',
  imports: [RouterLink],
  templateUrl: './go-to-route-button.html',
  styleUrl: './go-to-route-button.css',
})
export class GoToRouteButton {
  @Input() message : string = "Next";
  @Input() route : string = '';
}
