import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  aSkillsInfo = [
    {
      "skillType": "Front-End",
      "skills" : ["html", "css3", "sass", "javascript", "typescript", "Angular", "sap ui5"]
    },
    {
      "skillType": "Back-End",
      "skills" : ["java", "express.js", "node.js", "python", "golang"]
    },
    {
      "skillType": "Others",
      "skills" : ["hyperledger fabric", "docker", "git", "rest", "oop"]
    }
  ];
  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
    console.log(this.viewPortScroller.getScrollPosition());
  }

}
