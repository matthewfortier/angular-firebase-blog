import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.sass'],
})
export class BlogSingleComponent implements OnInit {

  
  title: string;
  hero: string;
  slug: string;
  body: string;
  category: string;
  tags: any[];
  url: string;

  constructor(public af: AngularFireDatabase, 
              private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService) {

    this.postsService.getPost(this.route.snapshot.paramMap.get('slug')).subscribe(result => {
      this.title = result[0].title;
      this.hero = result[0].hero;
      this.slug = result[0].slug;
      this.body = result[0].body;
    });
  }

  ngOnInit() {
  
  }

}
