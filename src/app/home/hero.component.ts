import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-white">
    <div class="animate-mesh pointer-events-none absolute -top-48 left-[8%] h-[560px] w-[560px] rounded-full bg-brand-surface-alt blur-3xl"></div>
    <div class="animate-mesh-slow pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-brand-tint-blue blur-3xl"></div>
    <div class="animate-mesh pointer-events-none absolute -bottom-24 left-[30%] h-[420px] w-[420px] rounded-full bg-brand-tint-rose blur-3xl"></div>

    <div class="container-hapi relative flex min-h-[88vh] flex-col items-center justify-center py-20 text-center">
      <p class="word-in mb-8 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-primary shadow-sm backdrop-blur" style="--w:0ms">
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-primary"></span>
        Your Trusted Publication Partner
      </p>

      <h1 class="max-w-5xl font-serif text-6xl leading-[1.02] tracking-tight text-brand-ink md:text-7xl lg:text-[6.5rem]">
        <span>
          <span *ngFor="let w of line1; let i = index" class="word-in mr-[0.25em]" [style.--w.ms]="200 + i * 110">{{ w }}</span>
        </span>
        <br />
        <span>
          <span *ngFor="let w of line2; let i = index" class="word-in mr-[0.25em] animate-gradient-pan bg-gradient-to-r from-brand-primary via-accent-rose to-brand-primary-dark bg-clip-text text-transparent" [style.--w.ms]="640 + i * 110">{{ w }}</span>
        </span>
      </h1>

      <p class="word-in mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-brand-body md:text-xl" style="--w:1150ms">
        A multidisciplinary, open-access publishing platform dedicated to advancing global scholarship — connecting authors, reviewers, and readers worldwide.
      </p>

      <div class="word-in mt-11 w-full max-w-2xl rounded-[1.75rem] border border-brand-line/80 bg-white/90 p-2 shadow-[0_24px_64px_rgba(20,24,31,0.1)] backdrop-blur" style="--w:1350ms">
        <div class="flex justify-center gap-1 border-b border-brand-line px-2 pt-1">
          <button *ngFor="let label of tabs; let i = index" (click)="tab = i"
            [class]="'relative px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ' + (tab === i ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-body')">
            {{ label }}
            <span *ngIf="tab === i" class="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand-primary"></span>
          </button>
        </div>
        <form class="flex flex-col gap-2 p-2 sm:flex-row" (submit)="$event.preventDefault()">
          <div class="relative flex-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" stroke-linecap="round" />
            </svg>
            <input type="text" [placeholder]="'Search ' + tabs[tab].toLowerCase() + '…'" class="w-full rounded-2xl border border-transparent bg-brand-surface py-4 pl-11 pr-4 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-primary/40 focus:bg-white focus:outline-none" />
          </div>
          <button type="submit" class="btn-shine rounded-2xl bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-dark">Search</button>
        </form>
      </div>

      <div class="word-in absolute bottom-8 left-1/2 -translate-x-1/2" style="--w:1800ms">
        <div class="flex h-10 w-6 items-start justify-center rounded-full border-2 border-brand-ink/20 p-1.5">
          <span class="animate-cue h-2 w-1 rounded-full bg-brand-ink/40"></span>
        </div>
      </div>
    </div>

    <div class="container-hapi relative pb-24">
      <div appReveal variant="scale">
        <div class="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_rgba(20,24,31,0.25)]">
          <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=80" alt="University library with tall bookshelves" class="animate-kenburns h-[420px] w-full object-cover md:h-[560px]" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent"></div>

          <div class="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-end md:p-12">
            <p class="max-w-md font-serif text-2xl italic leading-snug text-white md:text-3xl">&ldquo;A trusted home for high-quality research across diverse fields.&rdquo;</p>
            <div class="flex gap-4">
              <div class="rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-lg">
                <p class="font-serif text-3xl text-white">14</p>
                <p class="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">Journals</p>
              </div>
              <div class="rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-lg">
                <p class="font-serif text-3xl text-white">5</p>
                <p class="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class HeroComponent {
  tabs = ['Journals', 'Books', 'Authors'];
  tab = 0;
  line1 = 'Publishing Insight.'.split(' ');
  line2 = 'Cultivating Wisdom.'.split(' ');
}
