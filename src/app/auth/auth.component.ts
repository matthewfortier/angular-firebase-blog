import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  user: Observable<firebase.User>;
  email: string = '';
  password: string = '';

  redirect: string = '';

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) { 
    this.user = this.afAuth.authState;

    this.route.params.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((success) => {
      this.router.navigate([this.route.snapshot.paramMap.get('redirectUrl')]);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }


}
