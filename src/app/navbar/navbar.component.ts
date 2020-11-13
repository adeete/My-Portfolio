import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavServiceService } from '../shared/services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
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
  private scrollSub: Subscription;
  @ViewChildren('children') private children: QueryList<ElementRef>;
  constructor(private navService: NavServiceService) {}

  ngOnInit(): void {
    this.items[0].isCurrent = true;
    this.prev = 0;
    this.scrollSub = this.navService.scrollData.subscribe((idx: number) => {
      this.items[this.prev].isCurrent = false;
      this.items[idx].isCurrent = true;
      this.prev = idx;
      if (this.children) {
        if (idx == 2) {
          this._addDarkTheme();
        } else {
          this._removeDarkTheme();
        }
      }
    });
  }

  private _addDarkTheme() {
    this.children.forEach((el: ElementRef) => {
      el.nativeElement.classList.add('childrenDark');
    });
  }
  private _removeDarkTheme() {
    this.children.forEach((el: ElementRef) => {
      el.nativeElement.classList.remove('childrenDark');
    });
  }
  setCurrent(event: any) {
    const oTarget = event.target,
      category = oTarget.dataset.category,
      clickedItem = [...oTarget.parentElement.children].indexOf(event.target);

    if (category) {
      this.items[this.prev].isCurrent = false;
      this.items[clickedItem].isCurrent = true;
      this.prev = clickedItem;
      this.navService.scrollTo(category);
    }
  }

  ngOnDestroy() {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }
  }
}
