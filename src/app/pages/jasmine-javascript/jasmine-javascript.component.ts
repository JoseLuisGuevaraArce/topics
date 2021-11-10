import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jasmine-javascript',
  templateUrl: './jasmine-javascript.component.html',
  styleUrls: ['./jasmine-javascript.component.scss'],
  providers: [NgbCarouselConfig]
})
export class JasmineJavascriptComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {
  }

  ngOnInit(): void {
  }

 

}
