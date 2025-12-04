import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back-button',
  imports: [],
  templateUrl: './go-back-button.html',
  styleUrl: './go-back-button.css',
})
export class GoBackButton {
  constructor(private location : Location){}

  goBack(){
    this.location.back();
  }
}
