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

  hideSidebar: boolean = true;
  
  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   this.scrollTop = this.document.body.scrollTop;

  //   let h = this.document.documentElement;
  //   let b = this.document.body;
  //   let st = 'scrollTop';
  //   let sh = 'scrollHeight';

  //   let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  //   this.document.getElementById("scroll-bar").style.width = percent + '%';
  // }

}
