import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { CountUpComponent } from '../shared/count-up.component';

@Component({
  selector: 'app-bento',
  standalone: true,
  imports: [RouterLink, RevealDirective, CountUpComponent],
  template: `
  <section class="bg-white py-24 md:py-32">
    <div class="container-hapi">
      <div appReveal>
        <div class="mx-auto max-w-2xl text-center">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Why Hikmah Academia</p>
          <h2 class="font-serif text-4xl leading-tight tracking-tight text-brand-ink md:text-5xl">Built Around Your Research</h2>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
        <div appReveal variant="scale" class="md:col-span-4 md:row-span-2">
          <a routerLink="/journals" class="card-lift group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] border border-brand-line/70">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80" alt="Open books stacked in warm light" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent"></div>
            <div class="relative p-9">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Multidisciplinary Portfolio</p>
              <h3 class="mt-3 max-w-md font-serif text-3xl leading-snug text-white md:text-4xl">A trusted home for high-quality research</h3>
              <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Browse the journals
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </span>
            </div>
          </a>
        </div>

        <div appReveal [delay]="120" class="md:col-span-2">
          <div class="card-lift flex h-full flex-col justify-between rounded-[2rem] border border-brand-line/70 bg-brand-surface-alt p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Peer-Reviewed</p>
            <div>
              <app-count-up [end]="14" class="font-serif text-6xl tracking-tight text-brand-ink"></app-count-up>
              <p class="mt-1 text-sm font-semibold text-brand-body">active journals</p>
            </div>
          </div>
        </div>

        <div appReveal [delay]="240" class="md:col-span-2">
          <div class="card-lift flex h-full flex-col justify-between rounded-[2rem] border border-brand-line/70 bg-brand-tint-blue p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">Global Presence</p>
            <div>
              <app-count-up [end]="5" class="font-serif text-6xl tracking-tight text-brand-ink"></app-count-up>
              <p class="mt-1 text-sm font-semibold text-brand-body">countries — UAE, Malaysia, UK, Saudi Arabia &amp; India</p>
            </div>
          </div>
        </div>

        <div appReveal [delay]="120" class="md:col-span-2">
          <div class="card-lift flex h-full flex-col justify-between rounded-[2rem] border border-brand-line/70 bg-brand-tint-teal p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accent-teal">Author Services</p>
            <div>
              <app-count-up [end]="6" class="font-serif text-6xl tracking-tight text-brand-ink"></app-count-up>
              <p class="mt-1 text-sm font-semibold text-brand-body">specialist services, from editing to career strategy</p>
            </div>
          </div>
        </div>

        <div appReveal [delay]="240" class="md:col-span-2">
          <div class="card-lift flex h-full flex-col justify-between rounded-[2rem] border border-brand-line/70 bg-brand-tint-amber p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">Open Knowledge</p>
            <div>
              <p class="font-serif text-6xl tracking-tight text-brand-ink">100%</p>
              <p class="mt-1 text-sm font-semibold text-brand-body">open-access publishing platform</p>
            </div>
          </div>
        </div>

        <div appReveal [delay]="360" class="md:col-span-2">
          <a routerLink="/books" class="card-lift group flex h-full flex-col justify-between rounded-[2rem] border border-brand-line/70 bg-brand-tint-rose p-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-accent-rose">Beyond Journals</p>
            <div>
              <p class="font-serif text-3xl leading-snug tracking-tight text-brand-ink">Scholarly book publishing</p>
              <span class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-rose">
                Publish a book
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
export class BentoComponent {}
