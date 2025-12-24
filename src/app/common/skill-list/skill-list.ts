import { Component, Input } from '@angular/core';
import { Skill } from './skill/skill';
import { SkillListItem } from './SkillListItem';


@Component({
  selector: 'app-skill-list',
  imports: [Skill],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.css',
})
export class SkillList {
  @Input() title!: string;
  @Input() skillLists!: SkillListItem[][];

  constructor() {}
}
