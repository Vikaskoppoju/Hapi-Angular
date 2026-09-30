import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ARTICLES, JOURNALS, SUBJECTS, Journal } from '../data/site-data';

@Component({
  selector: 'app-journal-spotlight',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styles: [`
    :host { display: block; }
    .book { perspective: 1400px; }
    .book-inner {
      position: relative;
      transform: rotateY(-16deg) rotateX(2deg);
      transform-style: preserve-3d;
      transition: transform .5s cubic-bezier(.22,1,.36,1);
      animation: book-in .7s cubic-bezier(.22,1,.36,1) both;
    }
    .book:hover .book-inner { transform: rotateY(-6deg) rotateX(1deg); }
    /* spine: a thin darker slab on the left edge */
    .book-inner::before {
      content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: 14px;
      transform: translateX(-100%) rotateY(-90deg); transform-origin: right;
      background: linear-gradient(90deg, #0d1d38, #213c6c);
    }
    /* page block on the right edge */
    .book-inner::after {
      content: ''; position: absolute; top: 3px; bottom: 3px; right: 0; width: 12px;
      transform: translateX(100%) rotateY(90deg); transform-origin: left;
      background: repeating-linear-gradient(90deg, #f4efe4 0 1px, #d9d1c1 1px 2px);
    }
    .floor { animation: fade-in .8s ease both; }
    .spot-text { animation: text-in .6s cubic-bezier(.22,1,.36,1) both; }
    .ghost { animation: fade-in 1s ease both; -webkit-text-stroke: 1px rgba(255,255,255,.14); color: transparent; }
    @keyframes book-in { from { opacity: 0; transform: rotateY(-38deg) translateX(-24px); } to { opacity: 1; } }
    @keyframes text-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    .strip { scrollbar-width: none; }
    .strip::-webkit-scrollbar { display: none; }
    /* soften whichever edge has more covers beyond it */
    .strip.fade-r { mask-image: linear-gradient(90deg, #000 88%, transparent); }
    .strip.fade-l { mask-image: linear-gradient(90deg, transparent, #000 12%); }
    .strip.fade-l.fade-r { mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
    @media (prefers-reduced-motion: reduce) {
      .strip { scroll-behavior: auto; }
      .book-inner, .floor, .spot-text, .ghost { animation: none; }
      .book-inner { transition: none; }
    }
  `],
  template: `
  <section class="relative overflow-hidden bg-navy-deep text-white">

    <div class="wrap relative py-14 md:py-20">
      <!-- Heading + tabs -->
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/55">The HAPI list</p>
          <h2 class="mt-3 font-serif text-3xl font-medium tracking-tight md:text-[2.6rem]">Our journals</h2>
        </div>
        <a routerLink="/journals" class="border-b border-white/40 pb-0.5 text-sm font-semibold hover:border-white">Full journal directory</a>
      </div>

      <div class="-mx-5 mt-8 overflow-x-auto px-5 lg:mx-0 lg:px-0" role="tablist" aria-label="Filter journals by subject">
        <ul class="flex min-w-max gap-7 border-b border-white/15">
          <li *ngFor="let t of tabs">
            <button type="button" role="tab" [attr.aria-selected]="subject === t.value" (click)="setSubject(t.value)"
              class="-mb-px flex items-baseline gap-1.5 border-b-2 pb-3 text-[0.925rem] transition-colors"
              [ngClass]="subject === t.value ? 'border-accent font-semibold text-white' : 'border-transparent text-white/60 hover:text-white'">
              {{ t.label }}<span class="text-[0.75rem] font-normal text-white/45">{{ t.count }}</span>
            </button>
          </li>
        </ul>
      </div>

      <!-- Spotlight -->
      <div *ngFor="let j of [active]; trackBy: byAbbr" class="relative mt-12 grid items-center gap-10 md:grid-cols-[260px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-20">
        <span aria-hidden="true" class="ghost pointer-events-none absolute -top-10 right-0 hidden select-none font-serif text-[11rem] font-semibold leading-none tracking-tight lg:block">{{ j.abbr }}</span>

        <a [href]="j.url" target="_blank" rel="noopener" class="book relative mx-auto block w-[210px] md:w-full" [attr.aria-label]="'Visit ' + j.title">
          <div class="book-inner">
            <img [src]="j.cover" [alt]="j.title + ' cover'" class="block aspect-[2/3] w-full object-cover shadow-[18px_24px_40px_-12px_rgba(0,0,0,0.6)]" />
          </div>
          <span aria-hidden="true" class="floor absolute -bottom-6 left-[8%] right-[2%] h-6 rounded-[50%] bg-black/45 blur-xl"></span>
        </a>

        <div class="spot-text relative min-w-0">
          <p class="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white/55">
            <span class="text-accent">{{ pad(index + 1) }}</span> / {{ pad(list.length) }} &nbsp;&middot;&nbsp; {{ j.subject }}
          </p>
          <h3 class="mt-4 font-serif text-[2rem] font-medium leading-[1.12] tracking-tight md:text-[2.6rem] lg:text-5xl">{{ j.title }}</h3>

          <div class="mt-8 grid gap-6 border-t border-white/15 pt-6 xl:grid-cols-2">
            <div>
              <p class="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50">{{ j.editors.length > 1 ? 'Editors-in-Chief' : 'Editor-in-Chief' }}</p>
              <ul *ngIf="j.editors.length; else tba" class="mt-3 space-y-3">
                <li *ngFor="let e of j.editors" class="flex items-center gap-3.5">
                  <img [src]="e.photo" [alt]="e.name" class="h-14 w-14 shrink-0 rounded-full object-cover object-top ring-2 ring-white/20" />
                  <span class="min-w-0">
                    <span class="block font-serif text-lg leading-tight">{{ e.name }}</span>
                    <span class="mt-1 block text-[0.8rem] leading-snug text-white/60">{{ e.affiliation }}</span>
                  </span>
                </li>
              </ul>
              <ng-template #tba>
                <p class="mt-3 flex items-center gap-3 font-serif text-lg text-white/80">
                  <span class="border border-accent px-1.5 py-0.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">New title</span>
                  To be announced
                </p>
              </ng-template>
            </div>

            <div *ngIf="latest(j) as a">
              <p class="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50">Latest article</p>
              <a [href]="a.url" target="_blank" rel="noopener" class="mt-3 block font-serif text-[1.05rem] leading-snug text-white/90 hover:text-white hover:underline">{{ a.title }}</a>
              <p class="mt-1.5 text-[0.8rem] text-white/55">{{ a.type }} &middot; {{ a.published }}</p>
            </div>
          </div>

          <div class="mt-9 flex flex-wrap items-center gap-3">
            <a [href]="j.url" target="_blank" rel="noopener" class="btn bg-white text-navy-deep hover:bg-paper-2">Visit the journal</a>
            <a [href]="j.url + '/about/submissions'" target="_blank" rel="noopener" class="btn border-white/50 text-white hover:border-white hover:bg-white/10">Submit a manuscript</a>
            <span *ngIf="list.length > 1" class="ml-auto flex gap-2">
              <button type="button" (click)="step(-1)" aria-label="Previous journal" class="grid h-10 w-10 place-items-center border border-white/30 hover:border-white hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </button>
              <button type="button" (click)="step(1)" aria-label="Next journal" class="grid h-10 w-10 place-items-center border border-white/30 hover:border-white hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </button>
            </span>
          </div>
        </div>
      </div>

      <!-- Cover strip: scrolls horizontally; arrows page through it -->
      <div class="mt-14 border-t border-white/15 pt-6">
        <div class="flex items-center gap-3 md:gap-4">
          <button type="button" (click)="scrollStrip(-1)" [disabled]="!canPrev" aria-label="Scroll covers left"
            [class.invisible]="!scrollable"
            class="hidden h-11 w-11 shrink-0 place-items-center border border-white/30 transition hover:border-white hover:bg-white/10 disabled:opacity-25 disabled:hover:border-white/30 disabled:hover:bg-transparent sm:grid">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>

          <div #strip (scroll)="updateArrows()" class="strip -mx-5 min-w-0 flex-1 overflow-x-auto scroll-smooth px-5 pb-2 pt-3 sm:mx-0 sm:px-1"
            [class.fade-l]="canPrev" [class.fade-r]="canNext">
            <ul class="flex w-max gap-[18px]">
              <li *ngFor="let j of list; let i = index">
                <button type="button" (click)="select(j)" [attr.aria-pressed]="j === active" [attr.aria-label]="j.title" [attr.data-abbr]="j.abbr" [title]="j.title"
                  class="group flex w-[84px] flex-col items-center gap-2.5 md:w-[96px] lg:w-[104px]">
                  <img [src]="j.cover" alt="" loading="lazy"
                    class="aspect-[2/3] w-full object-cover shadow-[0_10px_18px_-8px_rgba(0,0,0,0.75)] transition duration-300"
                    [ngClass]="j === active ? '-translate-y-2 opacity-100 ring-2 ring-accent ring-offset-2 ring-offset-navy-deep' : 'opacity-55 group-hover:-translate-y-1 group-hover:opacity-95'" />
                  <span class="line-clamp-2 text-center font-serif text-[0.78rem] leading-snug transition-colors"
                    [ngClass]="j === active ? 'text-white' : 'text-white/50 group-hover:text-white/85'">{{ j.title }}</span>
                </button>
              </li>
            </ul>
          </div>

          <button type="button" (click)="scrollStrip(1)" [disabled]="!canNext" aria-label="Scroll covers right"
            [class.invisible]="!scrollable"
            class="hidden h-11 w-11 shrink-0 place-items-center border border-white/30 transition hover:border-white hover:bg-white/10 disabled:opacity-25 disabled:hover:border-white/30 disabled:hover:bg-transparent sm:grid">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class JournalSpotlightComponent implements AfterViewInit {
  @ViewChild('strip') strip?: ElementRef<HTMLDivElement>;
  canPrev = false;
  canNext = false;
  scrollable = false;

  subject: string | null = null;
  list: Journal[] = JOURNALS;
  active: Journal = JOURNALS[0];

  tabs = [
    { label: 'All', value: null as string | null, count: JOURNALS.length },
    ...SUBJECTS.map((s) => ({
      label: s.replace(' & Agricultural Sciences', ' & Agricultural').replace('Biomedical & Pharmaceutical', 'Biomedical & Pharma'),
      value: s as string | null,
      count: JOURNALS.filter((j) => j.subject === s).length,
    })),
  ];

  get index() {
    return this.list.indexOf(this.active);
  }

  setSubject(s: string | null) {
    this.subject = s;
    this.list = s ? JOURNALS.filter((j) => j.subject === s) : JOURNALS;
    this.active = this.list[0];
    // wait for the filtered strip to render, then reset its position
    setTimeout(() => {
      this.strip?.nativeElement.scrollTo({ left: 0, behavior: 'auto' });
      this.updateArrows();
    });
  }

  select(j: Journal) {
    this.active = j;
    this.revealActive();
  }

  step(d: number) {
    const n = this.list.length;
    this.active = this.list[(this.index + d + n) % n];
    this.revealActive();
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateArrows());
  }

  @HostListener('window:resize')
  updateArrows() {
    const el = this.strip?.nativeElement;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    this.scrollable = max > 2;
    this.canPrev = el.scrollLeft > 2;
    this.canNext = el.scrollLeft < max - 2;
  }

  scrollStrip(dir: number) {
    const el = this.strip?.nativeElement;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8 });
  }

  // Keep the selected cover visible when it's chosen via the main arrows.
  private revealActive() {
    setTimeout(() => {
      const el = this.strip?.nativeElement;
      const btn = el?.querySelector<HTMLElement>(`[data-abbr="${this.active.abbr}"]`);
      if (!el || !btn) return;
      const box = el.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      if (b.left < box.left || b.right > box.right) {
        el.scrollBy({ left: b.left - box.left - (box.width - b.width) / 2 });
      }
    });
  }

  latest(j: Journal) {
    return ARTICLES.find((a) => a.abbr === j.abbr);
  }

  pad(n: number) {
    return String(n).padStart(2, '0');
  }

  // Re-creating the spotlight node on change is what replays the entry animation.
  byAbbr = (_: number, j: Journal) => j.abbr;
}
