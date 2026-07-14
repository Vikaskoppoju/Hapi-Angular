import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

const featured = [
  { title: 'Advance Materials for Environmental Sustainability', abbr: 'AMES', field: 'Materials Science', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80' },
  { title: 'Current Trends in Plant Physiology', abbr: 'CTPP', field: 'Plant Sciences', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80' },
  { title: 'Computer Applications and Systems', abbr: 'CAS', field: 'Computing', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80' },
  { title: 'Biomedical Innovation and Discovery', abbr: 'BID', field: 'Medicine', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Social Sciences and Human Future', abbr: 'SSHF', field: 'Social Sciences', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80' },
  { title: 'Sustainable Materials And Manufacturing', abbr: 'SMM', field: 'Manufacturing', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80' },
];

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  template: `
  <section id="publications" class="relative overflow-hidden bg-brand-surface py-24 md:py-32">
    <div class="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-surface-alt blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal>
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div class="max-w-xl">
            <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Featured Journals</p>
            <h2 class="font-serif text-4xl leading-tight tracking-tight text-brand-ink md:text-5xl">Our Publications</h2>
            <p class="mt-5 text-lg text-brand-body">14 multidisciplinary, open-access journals spanning materials science, plant sciences, computing, and the social sciences.</p>
          </div>
          <a routerLink="/journals" class="group inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg">
            View All Journals
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
        </div>
      </div>

      <div class="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <div *ngFor="let journal of featured; let i = index" appReveal [delay]="(i % 3) * 120" variant="scale">
          <a routerLink="/journals" class="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-line/70 bg-white">
            <div class="img-zoom relative h-44">
              <img [src]="journal.image" [alt]="journal.title" class="h-full w-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
              <span class="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-primary backdrop-blur">{{ journal.field }}</span>
              <span class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary font-heading text-[11px] font-bold text-white shadow-lg">{{ journal.abbr }}</span>
            </div>
            <div class="flex flex-1 flex-col p-7">
              <h3 class="font-heading text-lg font-bold leading-snug tracking-tight text-brand-ink">{{ journal.title }}</h3>
              <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                View Journal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class PublicationsComponent {
  featured = featured;
}
