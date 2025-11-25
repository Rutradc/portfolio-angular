import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-to-button',
  imports: [],
  templateUrl: './go-to-button.html',
  styleUrl: './go-to-button.css',
})
export class GoToButton {
  @Input() message : string = "Next";
  @Input() link : string = '';
}
