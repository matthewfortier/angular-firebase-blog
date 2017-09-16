import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ProjectsService {

  items: FirebaseListObservable<any[]>

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) { }

  getProjects() {
    return this.af.list('/projects');
  }

  getProject( slug : string ) {
    return this.af.list('/projects', {
      query: {
        orderByChild: 'slug',
        equalTo: slug
      }
    });
  }
}
