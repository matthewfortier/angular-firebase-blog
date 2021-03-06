import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private postsService: PostsService, private titleService: Title) {
    this.titleService.setTitle("Matthew Fortier | Blog");
  }

  ngOnInit() {
    this.items = this.postsService.getPosts();
  }

}
