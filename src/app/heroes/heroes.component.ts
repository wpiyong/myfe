import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
          id: 1,
          name: 'Windstorm'
  };

  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
  }
}
