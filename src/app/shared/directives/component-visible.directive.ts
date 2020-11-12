import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavServiceService } from '../services/nav-service.service';

@Directive({
  selector: '[appComponentVisible]',
})
export class ComponentVisibleDirective
  implements OnDestroy, OnInit {
  @Input() threshold = 0.7;
  @Input() idx;
  private observer: IntersectionObserver | undefined;
  element: any;
  visible: any;
  constructor(private el: ElementRef, private navService: NavServiceService) {
  }

  ngOnInit() {
    this.createObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

  }

  private createObserver() {
    const options = {
      threshold: this.threshold
    };
    
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            this.navService.isScrolledTo(this.idx);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }
}
