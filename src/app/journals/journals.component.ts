import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar.component';
import { PageHeroComponent } from '../shared/page-hero.component';
import { CtaComponent, FooterComponent } from '../shared/cta-footer.component';
import { JournalsDirectoryComponent } from './journals-directory.component';

@Component({
  selector: 'app-journals-page',
  standalone: true,
  imports: [NavbarComponent, PageHeroComponent, JournalsDirectoryComponent, CtaComponent, FooterComponent],
  template: `
  <app-navbar></app-navbar>
  <main class="flex-1">
    <app-page-hero
      eyebrow="Peer-Reviewed Portfolio"
      title="Journals"
      description="At Hikmah Academia Publishing Institute, our academic journals provide a global platform for the dissemination of high-quality, peer-reviewed research across a wide range of disciplines."
      image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Grand library reading hall lined with books"
      accent="blue"
      [chip]="{ value: '14', label: 'Active Journals' }"
      bandQuote="A global platform for the dissemination of high-quality, peer-reviewed research.">
    </app-page-hero>
    <app-journals-directory></app-journals-directory>
    <app-cta></app-cta>
  </main>
  <app-footer></app-footer>
  `,
})
export class JournalsPageComponent {}
