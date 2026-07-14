import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

const items = [
  { tag: 'Call for Papers', date: 'Open Now', title: 'All 14 journals are accepting submissions across five fields', href: '/journals', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80', accent: 'bg-brand-primary' },
  { tag: 'New Journals', date: 'Launching Soon', title: 'Biomedical Innovation & Discovery, Social Sciences and Human Future, and Biopharmaceutics & Pharmacotherapy', href: '/journals', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80', accent: 'bg-accent-teal' },
  { tag: 'Events', date: 'Worldwide', title: 'Academic conferences, symposia & research workshops hosted globally', href: '/services', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80', accent: 'bg-accent-blue' },
  { tag: 'Books', date: 'Proposals Open', title: 'Submit your book proposal — editorial response within 4–8 weeks', href: '/books', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80', accent: 'bg-accent-amber' },
  { tag: 'Author Support', date: 'Year-Round', title: 'Coaching, editing, and career strategy services for researchers', href: '/services', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80', accent: 'bg-accent-rose' },
];

@Component({
  selector: 'app-news-events',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-white py-24 md:py-32">
    <div class="animate-mesh pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-tint-blue blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal>
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div class="max-w-xl">
            <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">News &amp; Events</p>
            <h2 class="font-serif text-4xl leading-tight tracking-tight text-brand-ink md:text-5xl">What&rsquo;s Happening at HAPI</h2>
          </div>
          <p class="flex items-center gap-2 text-sm font-semibold text-brand-muted">
            Scroll to explore
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </p>
        </div>
      </div>

      <div appReveal [delay]="150">
        <div class="-mx-6 mt-12 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] lg:-mx-8 lg:px-8">
          <div class="flex w-max snap-x snap-mandatory gap-6">
            <a *ngFor="let item of items" [routerLink]="item.href" class="card-lift group relative flex h-[440px] w-[320px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[1.75rem] border border-brand-line/70 md:w-[360px]">
              <img [src]="item.image" [alt]="item.title" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent"></div>

              <div class="absolute left-5 top-5 flex items-center gap-2">
                <span [class]="'rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white ' + item.accent">{{ item.tag }}</span>
                <span class="rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">{{ item.date }}</span>
              </div>

              <div class="relative p-6">
                <h3 class="font-heading text-lg font-bold leading-snug text-white">{{ item.title }}</h3>
                <span class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                  Learn more
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class NewsEventsComponent {
  items = items;
}
