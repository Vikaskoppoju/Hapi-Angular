import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar.component';
import { CtaComponent, FooterComponent } from '../shared/cta-footer.component';
import { HeroComponent } from './hero.component';
import { KineticMarqueeComponent } from './kinetic-marquee.component';
import { DisciplineExplorerComponent } from './discipline-explorer.component';
import { BentoComponent } from './bento.component';
import { DarkMissionComponent } from './dark-mission.component';
import { PublicationsComponent } from './publications.component';
import { NewsEventsComponent } from './news-events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    KineticMarqueeComponent,
    DisciplineExplorerComponent,
    BentoComponent,
    DarkMissionComponent,
    PublicationsComponent,
    NewsEventsComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
  <app-navbar></app-navbar>
  <main class="flex-1">
    <app-hero></app-hero>
    <app-kinetic-marquee></app-kinetic-marquee>
    <app-discipline-explorer></app-discipline-explorer>
    <app-bento></app-bento>
    <app-dark-mission></app-dark-mission>
    <app-publications></app-publications>
    <app-news-events></app-news-events>
    <app-cta></app-cta>
  </main>
  <app-footer></app-footer>
  `,
})
export class HomeComponent {}
