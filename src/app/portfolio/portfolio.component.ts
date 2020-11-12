import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavServiceService } from '../shared/services/nav-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @ViewChild('skills', { read: ElementRef }) skills: ElementRef;
  @ViewChild('about', { read: ElementRef }) about: ElementRef;
  @ViewChild('workexperience', { read: ElementRef }) workexperience: ElementRef;
  constructor(private navService: NavServiceService) {}

  ngOnInit() {
    this.navService.navData.subscribe((id) => {
      if (id) {
        this.scrollTo(id);
      }
    });
  }

  scrollTo(id) {
    this[id].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onContainerScroll(event) {
    console.log(event);
  }
}
