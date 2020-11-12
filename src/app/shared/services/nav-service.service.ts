import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  private navSource = new BehaviorSubject<string>("");
  navData = this.navSource.asObservable();
  private scrollSource = new BehaviorSubject<number>(0);
  scrollData = this.scrollSource.asObservable();
  constructor() { }

  scrollTo(id: string) {
    this.navSource.next(id);
  }

  isScrolledTo(idx : number) {
    this.scrollSource.next(idx);
  }
}
