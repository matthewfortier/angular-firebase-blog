import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { ResponsiveModule } from 'ng2-responsive'
import { DisqusModule } from "ngx-disqus";
import { SlickModule } from 'ngx-slick';

import { firebase } from '../environments/firebase.config';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { PostCuComponent } from './post-cu/post-cu.component';

import { PostsService } from './posts.service';
import { ProjectsService } from './projects.service';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ProjectSingleComponent } from './project-single/project-single.component';

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
  { path: 'project/create', component: ProjectComponent },
  { path: 'post/:slug', component: PostCuComponent },
  { path: 'project/:slug', component: ProjectComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogSingleComponent },
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'connect', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:slug', component: ProjectSingleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogSingleComponent,
    PostCuComponent,
    AuthComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ProjectComponent,
    ProjectSingleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ResponsiveModule,
    MarkdownToHtmlModule.forRoot(),
    DisqusModule.forRoot('matthewfortier'),
    SlickModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PostsService, ProjectsService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
