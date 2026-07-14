import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar.component';
import { PageHeroComponent } from '../shared/page-hero.component';
import { CtaComponent, FooterComponent } from '../shared/cta-footer.component';
import { ServicesDetailComponent } from './services-detail.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [NavbarComponent, PageHeroComponent, ServicesDetailComponent, CtaComponent, FooterComponent],
  template: `
  <app-navbar></app-navbar>
  <main class="flex-1">
    <app-page-hero
      eyebrow="Our Services"
      title="Services"
      description="Hikmah Academia Publishing Institute offers comprehensive academic publishing and scholarly support services designed to empower researchers, authors, and institutions worldwide."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Team collaborating around a table with laptops and notes"
      accent="teal"
      [chip]="{ value: '6', label: 'Specialist Services' }"
      bandQuote="Designed to empower researchers, authors, and institutions worldwide.">
    </app-page-hero>
    <app-services-detail></app-services-detail>
    <app-cta></app-cta>
  </main>
  <app-footer></app-footer>
  `,
})
export class ServicesPageComponent {}
