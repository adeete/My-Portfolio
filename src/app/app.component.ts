import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavServiceService } from "./shared/services/nav-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'My Portfolio';
  @ViewChild('skills') skillsInfo: ElementRef;
  constructor(private viewPortScroller: ViewportScroller, private navService: NavServiceService) {

  }

  ngOnInit() {
    // this.navService.navData.subscribe((id) => {
    //   console.log(id," scroll");
    //   this.viewPortScroller.scrollToAnchor(id);
    // });
  }

  ngAfterViewInit() {
    console.log(this.skillsInfo);
    
    setTimeout(()=>{
      
      this.skillsInfo.nativeElement.scrollIntoView({behavior: 'smooth'});
      },5000)
  }
}
