import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  title: string = '';
  body: string = '';
  category: string = 'Coding';
  tags = ["tech", "coding", "terminal", "zsh"];

  email: string = '';
  password: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    
    this.user = this.afAuth.authState;
    if (this.user) {
      this.items = this.af.list('/posts');    
    }

  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    this.items = this.af.list('/posts');    
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send() {
      this.items.push({ title: this.title, body: this.body, slug: this.slugify(this.title), tags: this.tags, category: this.category });
      this.title = '';
      this.body = '';
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
