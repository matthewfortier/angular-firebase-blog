import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { firebase } from '../environments/firebase.config';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { PostCuComponent } from './post-cu/post-cu.component';

import { PostsService } from './posts.service';
import { AuthComponent } from './auth/auth.component';

export const firebaseConfig = {
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  databaseURL: firebase.databaseURL,
  projectId: firebase.projectId,
  storageBucket: firebase.storageBucket,
  messagingSenderId: firebase.messagingSenderId
};

const appRoutes: Routes = [
  { path: 'post/create', component: PostCuComponent },
  { path: 'post/:slug', component: PostCuComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogSingleComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogSingleComponent,
    PostCuComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MarkdownToHtmlModule.forRoot(),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
