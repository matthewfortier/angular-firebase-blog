import { Component } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { HostListener} from "@angular/core";

import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  mobileMenuOut: boolean = false;
  shadow: boolean = true;
  
  constructor(@Inject(DOCUMENT) private document: Document, private route:ActivatedRoute) {
    let url = this.route.url.subscribe(result => {
      console.log('Result' + result.toString());
      if (result.toString() == ' ')
        this.shadow = false;
    });
  }

  mobileMenu() {
    this.mobileMenuOut = !this.mobileMenuOut;
  }

}
