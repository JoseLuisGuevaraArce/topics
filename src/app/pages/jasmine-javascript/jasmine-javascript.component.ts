import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

import JasmineJavascriptData from './jasmine-javascript.data';

@Component({
  selector: 'app-jasmine-javascript',
  templateUrl: './jasmine-javascript.component.html',
  styleUrls: ['./jasmine-javascript.component.scss'],
  providers: [NgbCarouselConfig]
})
export class JasmineJavascriptComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  sections = JasmineJavascriptData.sections;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.fizzBuzz(3));
    
  }





  fizzBuzz(test) {
    if (test % 3 === 0) {
      return this.getString(test);
    }
    return '';
  }

  getString(test) {
    if (test === 3) {
      return 'Fizz';
    }
    if (test === 5) {
      return 'Buzz';
    }
    if (test === 7) {
      return 'Fizz Buzz';
    }
    return ''
  }


 

}
