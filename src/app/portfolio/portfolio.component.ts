import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  projects: Array<any>;

  constructor(private projectsService: ProjectsService, private titleService: Title) { 
    this.titleService.setTitle("Matthew Fortier | Portfolio");
  }

  ngOnInit() {
    this.items = this.projectsService.getProjects();
  }

}
