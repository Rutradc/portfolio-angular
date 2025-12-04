import { ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-status-card',
  imports: [],
  templateUrl: './status-card.html',
  styleUrl: './status-card.css',
})
export class StatusCard implements OnInit{
  @Input() status : ProjectStatus = ProjectStatus.WIP;
  statusMessage : string = "";

  @HostBinding('style.--bg-color') bgColor = 'rgba(234, 179, 8, 0.10)';
  @HostBinding('style.--text-color') textColor = 'rgba(234, 178, 8, 1)';

  constructor (
    private cdr: ChangeDetectorRef
  ) {}

  updateCSS(backgroundColor : any, textColor : any) {
    this.bgColor = backgroundColor;
    this.textColor = textColor;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    switch (this.status) {
      case ProjectStatus.WIP:
        this.updateCSS('rgba(99, 102, 241, 0.10)', 'rgba(99, 102, 241, 1)');
        this.statusMessage = "Work in progress";
        break;
      case ProjectStatus.TEST:
        this.updateCSS('rgba(34, 195, 166, 0.10)', 'rgba(34, 195, 166, 1)');
        this.statusMessage = "En test";
        break;
      case ProjectStatus.DEPLOYED:
        this.updateCSS('rgba(59, 130, 246, 0.10)', 'rgba(59, 130, 246, 1)');
        this.statusMessage = "Déployé";
        break;
      default:
        break;
    }
  }
}

export enum ProjectStatus {
  WIP,
  TEST,
  DEPLOYED,
}