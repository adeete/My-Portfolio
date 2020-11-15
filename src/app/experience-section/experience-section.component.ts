import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
@Component({
  selector: 'app-experience-section',
  // animations: [
  //   trigger('slideInOut', [
  //     state(
  //       'initial',
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(20%) rotateY(45deg)',
  //         'transform-origin': 'right',
  //       })
  //     ),
  //     transition(':enter', [
  //     style({
  //       opacity : 1,
  //       transform: 'translateX(0) rotateY(0)',
  //     }),
  //     animate('0.5s ease-in-out')])
  //   ]),
  // ],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements OnInit {
  aExperiences = [
    {
      companyName: 'robert bosch engineering and business solutions',
      designation: 'software engineer',
      from: 'Aug, 2018',
      to: 'Aug, 2020',
      responsibilites: [
        'Develop Web Applications for Blockchain R&D Pocs, CEAT and Excide.',
        'Server side development for Blockchain R&D Pocs.',
        'Tech-talk and Innovation event presenter for Blockchain R&D.',
        'Integrate Applications with External APIs.',
      ],
      accomplishments: [
        'Won Silver award for my performance as a fresher.',
        'Won Bronze award for contribution to Blockchain R&D.',
      ],
      technologies: [
        'Node.js',
        'Angular',
        'SAP UI5',
        'Hyperledger fabric',
        'Javascript',
        'Rest API',
        'Python',
        'CSS',
        'SASS',
        'Golang',
        'Yaml',
        'Swagger',
        'Ngrok',
        'Docker',
      ],
    },
    {
      companyName: 'robert bosch engineering and business solutions',
      designation: 'software engineering intern',
      from: 'Jan, 2018',
      to: 'June, 2018',
      responsibilites: [
        'Develop Desktop and Web Application for ChatBot POC.',
        'Revamp the Chatbot for managing purchase requests and orders.',
      ],
      accomplishments: [],
      technologies: [
        'electron',
        'node.js',
        'angular',
        'html',
        'css',
        'firebase',
        'python',
        'flask',
      ],
    }
  ];
  current = 0;
  currentState = 'initial';
  constructor() {}

  ngOnInit(): void {}

  prev() {
    console.log('next');
    const len = this.aExperiences.length,
      mainSection = document.querySelector('.experience-section');
    this.current = this.current == 0 ? len - 1 : this.current - 1;

    mainSection.classList.remove('section-animate');
  }

  next() {
    console.log('next');
    const len = this.aExperiences.length;
    this.current = (this.current + 1) % len;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
