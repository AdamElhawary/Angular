import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills: Array<Iskill> = [
    { name: 'HTML', prog: '99%' },
    { name: 'Css', prog: '99%' },
    { name: 'SCSS', prog: '70%' },
    { name: 'JS', prog: '90%' },
    { name: 'TS', prog: '85%' },
    { name: 'Git', prog: '99%' },
  ];
}

interface Iskill {
  name: String;
  prog: String;
}
