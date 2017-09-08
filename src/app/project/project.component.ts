import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

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

  constructor() { }

  ngOnInit() {
  }

}
