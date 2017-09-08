import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-cu',
  templateUrl: './post-cu.component.html',
  styleUrls: ['./post-cu.component.sass']
})
export class PostCuComponent implements OnInit {

  user: any;
  items: FirebaseListObservable<any[]>;
  item: any;
  title: string = '';
  hero: string = '';
  body: string = '';
  slug: string = '';
  category: string = 'Coding';
  tags = ["tech", "coding", "terminal", "zsh"];
  key: any;

  email: string = '';
  password: string = '';

  constructor(public afAuth: AngularFireAuth, 
              public af: AngularFireDatabase, 
              private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService) {
    
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
      this.item = this.postsService.getPost(this.slug)
      .subscribe((result) => {
        this.title = result[0].title;
        this.hero = result[0].hero;
        this.body = result[0].body;
        this.key = result[0].$key;
      });
    }
    this.items = this.postsService.getPosts();
  }

  create() {
    this.items.push({ title: this.title, hero: this.hero, body: this.body, slug: this.slugify(this.title), tags: this.tags, category: this.category });
    this.router.navigate(['/blog/' + this.slugify(this.title)]);
  }

  update() {
    this.af.object('/posts/' + this.key).update({ title: this.title, hero: this.hero, body: this.body, slug: this.slugify(this.title), tags: this.tags, category: this.category });
    this.router.navigate(['/blog/' + this.slugify(this.title)]);    
  }

  delete() {
    this.af.object('/posts/' + this.key).remove();
    this.router.navigate(['/post/create']);
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
