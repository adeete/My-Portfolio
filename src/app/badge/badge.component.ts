import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
