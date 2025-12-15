import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-common-button',
  imports: [],
  templateUrl: './common-button.html',
  styleUrl: './common-button.css',
})
export class CommonButton {
  @Input() text: string = 'Button';
  @Input() link: string = '';

  @HostBinding('style.--bg-color') bgColor = '#14303dff';
  @HostBinding('style.--text-color') textColor = '#4fc3f7';

  constructor (
    private cdr: ChangeDetectorRef
  ) {}

  updateCSS(backgroundColor : any, textColor : any) {
    this.bgColor = backgroundColor;
    this.textColor = textColor;
    this.cdr.detectChanges();
  }
}
