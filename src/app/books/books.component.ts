import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar.component';
import { PageHeroComponent } from '../shared/page-hero.component';
import { FooterComponent } from '../shared/cta-footer.component';
import { BooksBenefitsComponent, BooksProcessComponent, BooksSubmissionComponent } from './books-content.component';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [NavbarComponent, PageHeroComponent, BooksBenefitsComponent, BooksProcessComponent, BooksSubmissionComponent, FooterComponent],
  template: `
  <app-navbar></app-navbar>
  <main class="flex-1">
    <app-page-hero
      eyebrow="Publish a Book With Us"
      title="Books"
      description="Hikmah Academia publishes high-quality academic and scholarly books that contribute to research, education, and global knowledge dissemination — spanning science, technology, agriculture, environment, and humanities. Every title undergoes structured editorial review."
      image="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Open book resting on a stack of hardcovers"
      accent="amber"
      [chip]="{ value: '4–8 wks', label: 'Editorial Response' }"
      bandQuote="High-quality academic and scholarly books that contribute to research, education, and global knowledge.">
    </app-page-hero>
    <app-books-benefits></app-books-benefits>
    <app-books-process></app-books-process>
    <app-books-submission></app-books-submission>
  </main>
  <app-footer></app-footer>
  `,
})
export class BooksPageComponent {}
