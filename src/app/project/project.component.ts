import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  user: any;
  items: FirebaseListObservable<any[]>;
  item: any;
  title: string = '';
  hero: string = '';
  codepen: string = '';
  body: string = '';
  slug: string = '';
  key: any;

  email: string = '';
  password: string = '';

  constructor(public afAuth: AngularFireAuth, 
    public af: AngularFireDatabase, 
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService) {

    this.afAuth.authState.subscribe(user => {
      if (user)
        this.user = user;
      else
        this.router.navigate(['auth', { redirectUrl: this.router.url }]);
    });

  }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    if (this.slug) {
      this.item = this.projectsService.getProject(this.slug)
      .subscribe((result) => {
        this.title = result[0].title;
        this.hero = result[0].hero;
        this.body = result[0].body;
        this.codepen = result[0].codepen;
        this.key = result[0].$key;
      });
    }
    this.items = this.projectsService.getProjects();
  }

  create() {
    this.items.push({ title: this.title, hero: this.hero, body: this.body, codepen: this.codepen, slug: this.slugify(this.title) });
    this.router.navigate(['/portfolio/' + this.slugify(this.title)]);
  }

  update() {
    this.af.object('/projects/' + this.key).update({ title: this.title, hero: this.hero, body: this.body, codepen: this.codepen, slug: this.slugify(this.title) });
    this.router.navigate(['/portfolio/' + this.slugify(this.title)]);    
  }

  delete() {
    this.af.object('/projects/' + this.key).remove();
    this.router.navigate(['/project/create']);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

}
