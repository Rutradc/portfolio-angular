import { Component, Input } from '@angular/core';
import { SkillListItem } from '../../skill-list/SkillListItem';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  @Input() skillItem! : SkillListItem;
}
