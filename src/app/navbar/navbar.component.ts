import { Component, ElementRef, OnInit } from '@angular/core';
import { NavServiceService } from '../shared/services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items = [
    {
      isCurrent: false,
      category: 'about',
      value: 'about',
    },
    {
      isCurrent: false,
      category: 'skills',
      value: 'skills',
    },
    {
      isCurrent: false,
      category: 'workexperience',
      value: 'work experience',
    },
  ];
  prev: number;
  constructor(private navService: NavServiceService) {}

  ngOnInit(): void {
    this.items[0].isCurrent = true;
    this.prev = 0;
  }

  setCurrent(event: any) {
    const oTarget = event.target,
      category = oTarget.dataset.category,
      clickedItem = [...oTarget.parentElement.children].indexOf(event.target);

    if (category) {
      this.navService.scrollTo(category);
    }
    this.items[this.prev].isCurrent = false;
    this.items[clickedItem].isCurrent = true;
    this.prev = clickedItem;
  }
}
