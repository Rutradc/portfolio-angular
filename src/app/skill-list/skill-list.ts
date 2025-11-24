import { Component, Input } from '@angular/core';
import { SkillListItem } from './SkillListItem';
import { Skill } from "../skillList/skill/skill";

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
