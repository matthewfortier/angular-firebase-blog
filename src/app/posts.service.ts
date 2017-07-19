import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class PostsService {

  items: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

  }

  getPosts() {
    return this.af.list('/posts');
  }

  getPost( slug : string ) {
    return this.af.list('/posts', {
      query: {
        orderByChild: 'slug',
        equalTo: slug
      }
    });
  }

}
