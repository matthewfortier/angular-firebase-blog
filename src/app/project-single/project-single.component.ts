import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.sass']
})
export class ProjectSingleComponent implements OnInit {

  title: string;
  hero: string;
  slug: string;
  body: string;
  codepen: string;

  slides: Array<string> = [];

  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    "autoplay": true, 
    "autoplaySpeed": 5000,
    "arrows": false,
    "dots": true
  };

  constructor(public af: AngularFireDatabase, 
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService) {

      this.projectsService.getProject(this.route.snapshot.paramMap.get('slug')).subscribe(result => {
        this.title = result[0].title;

        console.log(result[0].hero)
        for (let image of result[0].hero.split(',')) {
          this.slides.push(image);
        }

        //this.hero = result[0].hero;
        this.slug = result[0].slug;
        this.codepen = result[0].codepen;
        this.body = result[0].body;
      });
  }

  ngOnInit() {
  }

}
