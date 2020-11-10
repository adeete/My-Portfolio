import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss'],
})
export class SectionInfoComponent implements OnInit {
  oIntro: any;
  constructor() {}

  ngOnInit(): void {
    this.oIntro = {
      name: 'Adeete',
      occupations: ['Software Engineer', 'Fullstack Developer'],
      about:
        "I'm a full stack developer, having obtained B.Tech degreee with Computer Science" 
        +" Engineering as major, currently living in Bengaluru, India.Please have a look at my skills"
        +" and experience and feel free to connect with me on Linkedin."
    };
  }
}
