import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { HostListener} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  scrollTop: number = 0;
  scrollFade: boolean = false;
  scrollMobile: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    if (window.innerWidth < 992)
      this.scrollMobile = true;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollTop = this.document.body.scrollTop;
    if (this.scrollTop > 100)
      this.scrollFade = true;
    else
      this.scrollFade = false;
  }

}
