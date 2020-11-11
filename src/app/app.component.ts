import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavServiceService } from './shared/services/nav-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'My Portfolio';
  @ViewChild('skills', { read: ElementRef }) skills: ElementRef;
  @ViewChild('about', { read: ElementRef }) about: ElementRef;
  @ViewChild('workexperience', { read: ElementRef }) workexperience: ElementRef;
  constructor(
    private navService: NavServiceService
  ) {}

  ngOnInit() {
    this.navService.navData.subscribe((id) => {
      if (id) {
        this.scrollTo(id);
      }
    });
  }

  ngAfterViewInit() {}

  scrollTo(id) {
    console.log('scrolling');

    this[id].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
