import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { SectionInfoComponent } from './section-info/section-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { BadgeComponent } from './badge/badge.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ComponentVisibleDirective } from './shared/directives/component-visible.directive';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavbarComponent,
    SkillsComponent,
    SectionInfoComponent,
    ContactInfoComponent,
    BadgeComponent,
    NotFoundComponent,
    ExperienceSectionComponent,
    ComponentVisibleDirective,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
