import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Tech, TechCard, TechType } from '../buttons/tech-card/tech-card';
import { ProjectStatus, StatusCard } from '../buttons/status-card/status-card';
import { GoToButton } from '../buttons/go-to-button/go-to-button';
import { SkillList } from '../skill-list/skill-list';
import { Git } from '../buttons/git-button/git-button';
import { SkillListItem } from '../skill-list/SkillListItem';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SkillList, GoToButton, StatusCard, TechCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  ProjectStatus = ProjectStatus;
  Git = Git;
  skillLists : SkillListItem[][] = [
    [
      {
        skill: 'React',
        link: 'https://react.dev/'
      },
      {
        skill: 'Node.js',
        link: 'https://nodejs.org/en'
      },
      {
        skill: 'Spring',
        link: 'https://spring.io/'
      },
      {
        skill: 'Angular',
        link: 'https://angular.dev/'
      },
      {
        skill: 'Next.js',
        link: 'https://nextjs.org/'
      },
      {
        skill: 'ABP',
        link: 'https://abp.io/'
      }
    ],
    [
      {
        skill: 'Maven',
        link: 'https://maven.apache.org/'
      },
      {
        skill: 'Hibernate',
        link: 'https://hibernate.org/'
      },
      {
        skill: 'Tomcat',
        link: 'https://tomcat.apache.org/'
      },
      {
        skill: 'Tailwind',
        link: 'https://tailwindcss.com/'
      },
      {
        skill: 'Git',
        link: 'https://git-scm.com/'
      },
      {
        skill: 'GitHub',
        link: 'https://github.com/'
      },
      {
        skill: 'GitLab',
        link: 'https://about.gitlab.com/'
      },
      {
        skill: 'Azure',
        link: 'https://azure.microsoft.com/fr-fr'
      },
    ],
    [
      {
        skill: 'HTML',
        link: 'https://developer.mozilla.org/fr/docs/Web/HTML'
      },
      {
        skill: 'CSS',
        link: 'https://developer.mozilla.org/fr/docs/Web/CSS'
      },
      {
        skill: 'JavaScript',
        link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'
      },
      {
        skill: 'C#',
        link: 'https://dotnet.microsoft.com/fr-fr/languages/csharp'
      },
      {
        skill: 'Java',
        link: 'https://www.java.com/fr/'
      },
      {
        skill: 'TypeScript',
        link: 'https://www.typescriptlang.org/'
      },
      {
        skill: 'PHP',
        link: 'https://www.php.net/'
      },
    ],
    [
      {
        skill: 'JSON',
        link: 'https://www.json.org/json-en.html'
      },
      {
        skill: 'XML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML_introduction'
      },
    ]
  ];
  springSkateTechList : Tech[] = [
    {
      name: 'Spring',
      type: TechType.FULL
    },
    {
      name: 'Java',
      type: TechType.FULL
    },
    {
      name: 'HTML',
      type: TechType.FRONT
    },
    {
      name: 'CSS',
      type: TechType.FRONT
    },
    {
      name: 'Hibernate',
      type: TechType.DB
    },
    {
      name: 'MySQL',
      type: TechType.DB
    },
    {
      name: 'Tomcat',
      type: TechType.OTHER
    },
  ]
  portfolioTechList : Tech[] = [
    {
      name: 'Angular',
      type: TechType.FRONT
    },
    {
      name: 'TypeScript',
      type: TechType.FRONT
    },
    {
      name: 'HTML',
      type: TechType.FRONT
    },
    {
      name: 'CSS',
      type: TechType.FRONT
    },
  ]
}
