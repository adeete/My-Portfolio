import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  private navSource = new BehaviorSubject<string>("");
  navData = this.navSource.asObservable();
  constructor() { }

  scrollTo(id: string) {
    this.navSource.next(id);
  }
}
