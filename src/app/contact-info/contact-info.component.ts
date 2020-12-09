import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  contactInfo: any[];
  constructor() {}

  ngOnInit(): void {
    this.contactInfo = [
      {
        iconType: 'gmailIcon',
        iconImg: '../../assets/img/gmail.png',
        contactType: 'Email Me',
        target: '_blank',
        contactUrl: "mailto:adeete09@gmail.com",
      },
      {
        iconType: 'linkedinIcon',
        iconImg: '../../assets/img/linkedin.png',
        contactType: 'LinkedIn',
        target: '_blank',
        contactUrl: "https://www.linkedin.com/in/adeete-kashyap-656b57126/",
      },
      {
        iconType: 'githubIcon',
        iconImg: '../../assets/img/github-logo.svg',
        contactType: 'Github',
        target: '_blank',
        contactUrl: "https://github.com/adeete",
      },
      {
        iconType: 'resumeIcon',
        iconImg: '../../assets/img/down-arrow.png',
        contactType: 'Resume',
        target: '_self',
        contactUrl: "https://drive.google.com/uc?export=download&id=16rh_hhLu--IgxHqPiiQJHV9slqwm7ev3",
      }
    ];
  }
}
