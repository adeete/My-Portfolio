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
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements OnInit {
  aExperiences = [
    {
      companyName: 'zeotap',
      designation: 'software engineer',
      from: 'July, 2021',
      to: 'Present',
      responsibilites: [
        'Developed a custom multi-step dropdown component',
        'UI Bug Fixes.',
        'Assisted UI team in development of multiple features',
      ],
      technologies: [
        'Angular',
        'Javascript',
        'Typescript',
        'RXJS',
        'Functional Programming',
        'Storybook',
        'CSS',
        'SASS',
        'HTML',
        'Git',
      ],
    },
    {
      companyName: 'peoplehum (Coviam)',
      designation: 'software engineer',
      from: 'Jan, 2021',
      to: 'Present',
      responsibilites: [
        'Developed a generic resuable accordian list component capable of being extended for any use-case.',
        'UI Bug Fixes.',
        'Solved issue of sharing data between two subdomains.',
        'Developed UI components for Shift workflow',
      ],
      technologies: [
        'Angular',
        'Javascript',
        'Typescript',
        'Python',
        'CSS',
        'SASS',
        'HTML',
        'Git',
      ],
    },
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
    },
  ];
  current = 0;
  currentState = 'initial';
  constructor() {}

  ngOnInit(): void {}

  prev() {
    const len = this.aExperiences.length,
      mainSection = document.querySelector('.experience-section');
    this.current = this.current == 0 ? len - 1 : this.current - 1;

    mainSection.classList.remove('section-animate');
  }

  next() {
    const len = this.aExperiences.length;
    this.current = (this.current + 1) % len;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
