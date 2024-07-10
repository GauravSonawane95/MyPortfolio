import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myport';
  Name:string="Gaurav Sonawane";
  Designation:string="Angular Developer/Front End Developer"
  about='Fontend Developer with a strong foundation in JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Angular Material, and the Angular framework. Known for creating seamless and visually appealing web experiences, As a recent MCA graduate, I am well-versed in the latest frontend development technologies and trends.'
  pageTitle: string = 'Default Title';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(event => {
      this.pageTitle = event['title'];
      this.titleService.setTitle(this.pageTitle);
    });
  }
}


