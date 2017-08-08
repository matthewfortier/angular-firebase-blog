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
  scrollTop: number = 0;
  
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

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollTop = this.document.body.scrollTop;

    let h = this.document.documentElement;
    let b = this.document.body;
    let st = 'scrollTop';
    let sh = 'scrollHeight';

    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    this.document.getElementById("scroll-bar").style.width = percent + '%';
  }

}
