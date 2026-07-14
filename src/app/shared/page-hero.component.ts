import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from './reveal.directive';

type Accent = 'violet' | 'blue' | 'amber' | 'teal' | 'rose';

const accents: Record<Accent, { eyebrow: string; mesh1: string; mesh2: string; gradient: string; dot: string }> = {
  violet: { eyebrow: 'text-brand-primary', mesh1: 'bg-brand-surface-alt', mesh2: 'bg-brand-tint-rose', gradient: 'from-brand-primary via-accent-rose to-brand-primary-dark', dot: 'bg-brand-primary' },
  blue: { eyebrow: 'text-accent-blue', mesh1: 'bg-brand-tint-blue', mesh2: 'bg-brand-surface-alt', gradient: 'from-accent-blue via-brand-primary to-accent-blue', dot: 'bg-accent-blue' },
  amber: { eyebrow: 'text-accent-amber', mesh1: 'bg-brand-tint-amber', mesh2: 'bg-brand-tint-rose', gradient: 'from-accent-amber via-accent-rose to-accent-amber', dot: 'bg-accent-amber' },
  teal: { eyebrow: 'text-accent-teal', mesh1: 'bg-brand-tint-teal', mesh2: 'bg-brand-tint-blue', gradient: 'from-accent-teal via-accent-blue to-accent-teal', dot: 'bg-accent-teal' },
  rose: { eyebrow: 'text-accent-rose', mesh1: 'bg-brand-tint-rose', mesh2: 'bg-brand-surface-alt', gradient: 'from-accent-rose via-brand-primary to-accent-rose', dot: 'bg-accent-rose' },
};

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-white">
    <div [class]="'animate-mesh pointer-events-none absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full blur-3xl ' + a.mesh1"></div>
    <div [class]="'animate-mesh-slow pointer-events-none absolute -right-32 top-10 h-[440px] w-[440px] rounded-full blur-3xl ' + a.mesh2"></div>

    <div class="container-hapi relative flex flex-col items-center py-20 text-center md:py-28">
      <p [class]="'word-in mb-7 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] shadow-sm backdrop-blur ' + a.eyebrow" style="--w: 0ms">
        <span [class]="'h-1.5 w-1.5 animate-pulse rounded-full ' + a.dot"></span>
        {{ eyebrow }}
      </p>

      <h1 class="max-w-4xl font-serif text-6xl leading-[1.02] tracking-tight text-brand-ink md:text-7xl lg:text-8xl">
        <span *ngFor="let word of titleWords; let i = index" [class]="'word-in mr-[0.25em] animate-gradient-pan bg-gradient-to-r bg-clip-text text-transparent ' + a.gradient" [style.--w.ms]="180 + i * 120">{{ word }}</span>
      </h1>

      <p class="word-in mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-body md:text-xl" style="--w: 700ms">
        {{ description }}
      </p>
    </div>

    <div class="container-hapi relative pb-20">
      <div appReveal variant="scale">
        <div class="relative overflow-hidden rounded-[2.5rem] shadow-[0_36px_90px_rgba(20,24,31,0.22)]">
          <img [src]="image" [alt]="imageAlt" class="animate-kenburns h-[320px] w-full object-cover md:h-[440px]" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent"></div>

          <div class="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-end md:p-10">
            <p *ngIf="bandQuote; else spacer" class="max-w-md font-serif text-xl italic leading-snug text-white md:text-2xl">&ldquo;{{ bandQuote }}&rdquo;</p>
            <ng-template #spacer><span></span></ng-template>
            <div *ngIf="chip" class="rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-lg">
              <p class="font-serif text-3xl text-white">{{ chip.value }}</p>
              <p class="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">{{ chip.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class PageHeroComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() accent: Accent = 'violet';
  @Input() chip?: { value: string; label: string };
  @Input() bandQuote?: string;

  get a() {
    return accents[this.accent];
  }

  get titleWords() {
    return this.title.split(' ');
  }
}
