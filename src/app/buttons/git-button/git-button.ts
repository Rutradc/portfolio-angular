import { ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-button',
  imports: [],
  templateUrl: './git-button.html',
  styleUrl: './git-button.css',
})
export class GitButton implements OnInit{
  @Input() git : Git = Git.GitHub;
  @Input() link : string = '';
  gitIcon : string = 'fab fa-github';

  @HostBinding('style.--bg-color') bgColor = 'rgba(24, 23, 23, 1)';
  @HostBinding('style.--text-color') textColor = 'rgba(24, 23, 23, 0.10)';

  constructor (
    private cdr: ChangeDetectorRef
  ) {}

  updateCSS(backgroundColor : any, textColor : any) {
    this.bgColor = backgroundColor;
    this.textColor = textColor;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    switch (this.git){
      case Git.GitHub:
        this.gitIcon = 'fab fa-github';
        this.updateCSS('rgba(24, 23, 23, 1)', 'rgba(24, 23, 23, 0.10)');
        break;
      case Git.GitLab:
        this.gitIcon = 'fa-brands fa-gitlab';
        this.updateCSS('rgba(252, 109, 38, 1)', 'rgba(252, 109, 38, 0.10)');
        break;
      default:
        break;
    }
  }
}

export enum Git{
  GitHub,
  GitLab
}