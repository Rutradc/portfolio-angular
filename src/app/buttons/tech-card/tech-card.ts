import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './tech-card.html',
  styleUrl: './tech-card.css',
})
export class TechCard {
  @Input() tech : string = '';
  @Input() techType : TechType = TechType.OTHER;

  @HostBinding('style.--bg-color') bgColor = 'rgba(248, 113, 113, 0.10)';
  @HostBinding('style.--text-color') textColor = 'rgba(248, 113, 113, 1)';

  constructor (
    private cdr: ChangeDetectorRef
  ) {}

  updateCSS(backgroundColor : any, textColor : any) {
    this.bgColor = backgroundColor;
    this.textColor = textColor;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    switch (this.techType) {
      case TechType.FULL:
        this.updateCSS('rgba(245, 158, 11, 0.10)', 'rgba(245, 158, 11, 1)');
        break;
      case TechType.FRONT:
        this.updateCSS('rgba(94, 92, 255, 0.10)', 'rgba(94, 92, 255, 1)');
        break;
      case TechType.BACK:
        this.updateCSS('rgba(129, 140, 248, 0.10)', 'rgba(129, 140, 248, 1)');
        break;
      case TechType.DB:
        this.updateCSS('rgba(52, 211, 153, 0.10)', 'rgba(52, 211, 153, 1)');
        break;
      case TechType.OTHER:
        this.updateCSS('rgba(248, 113, 113, 0.10)', 'rgba(248, 113, 113, 1)');
        break;
      default:
        break;
    }
  }
}

export type Tech = {
  name : string;
  type : TechType;
}

export enum TechType {
  FULL,
  FRONT,
  BACK,
  DB,
  OTHER
}
