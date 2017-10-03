import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Matthew Fortier | Resume");
  }

  ngOnInit() {
  }

}
