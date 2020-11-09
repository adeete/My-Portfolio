import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss']
})
export class SectionInfoComponent implements OnInit {
  oIntro: any;
  constructor() { }

  ngOnInit(): void {
    this.oIntro = {
      name: "Adeete",
      occupations: ["Software Engineer", "Fullstack Developer"],
      about: "I'm a 24 years old Full Stack Developer with 2 years of industry experience. I am a Computer Science Engineer currently living in Bengaluru, India. Have a look at my skills and experience or just connect with me on LinkedIn."
    }
  }

}
