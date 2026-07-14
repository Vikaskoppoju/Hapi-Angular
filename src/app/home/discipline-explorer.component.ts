import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

const fields = [
  { name: 'Materials Science', count: 6, journals: 'AMES · CS · BMB · NM · SMM · SSS', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Plant & Agricultural Sciences', count: 4, journals: 'CTPP · MAPR · PMS · PT', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Computing & Systems', count: 1, journals: 'CAS', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Biomedical & Pharmaceutical', count: 2, journals: 'BID · BAP', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Social Sciences', count: 1, journals: 'SSHF', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80' },
];

@Component({
  selector: 'app-discipline-explorer',
  standalone: true,
  imports: [CommonModule, RevealDirective, RouterLink],
  template: `
  <section class="relative overflow-hidden bg-brand-surface py-24 md:py-32">
    <div class="animate-mesh-slow pointer-events-none absolute -right-48 top-0 h-[520px] w-[520px] rounded-full bg-brand-surface-alt blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal>
        <div class="max-w-2xl">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Explore by Field</p>
          <h2 class="font-serif text-4xl leading-tight tracking-tight text-brand-ink md:text-5xl">Fourteen Journals.<br />Five Fields of Inquiry.</h2>
        </div>
      </div>

      <div class="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <div *ngFor="let field of fields; let i = index" appReveal [delay]="i * 90" variant="left">
            <a routerLink="/journals" (mouseenter)="active = i" (focus)="active = i"
              [class]="'group flex items-center gap-6 border-b border-brand-line py-7 transition-all duration-500 ' + (active === i ? 'pl-4' : 'pl-0')">
              <span [class]="'font-heading text-sm font-bold transition-colors duration-300 ' + (active === i ? 'text-brand-primary' : 'text-brand-muted')">{{ pad(i + 1) }}</span>
              <div class="min-w-0 flex-1">
                <h3 [class]="'font-serif text-2xl tracking-tight transition-colors duration-300 md:text-3xl ' + (active === i ? 'text-brand-primary' : 'text-brand-ink')">{{ field.name }}</h3>
                <p [class]="'mt-1 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-500 ' + (active === i ? 'max-h-6 text-brand-muted opacity-100' : 'max-h-0 overflow-hidden opacity-0')">{{ field.journals }}</p>
              </div>
              <span [class]="'shrink-0 rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-300 ' + (active === i ? 'border-brand-primary bg-brand-primary text-white' : 'border-brand-line text-brand-muted')">
                {{ field.count }} {{ field.count === 1 ? 'journal' : 'journals' }}
              </span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                [class]="'shrink-0 transition-all duration-500 ' + (active === i ? 'translate-x-0 text-brand-primary opacity-100' : '-translate-x-2 text-brand-muted opacity-0')">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div appReveal variant="right" [delay]="200" class="hidden lg:block">
          <div class="relative h-[520px] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(20,24,31,0.2)]">
            <img *ngFor="let field of fields; let i = index" [src]="field.image" [alt]="field.name"
              [class]="'absolute inset-0 h-full w-full object-cover transition-all duration-700 ' + (active === i ? 'scale-100 opacity-100' : 'scale-110 opacity-0')" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{{ pad(active + 1) }} — {{ fields[active].name }}</p>
              <p class="mt-2 font-serif text-2xl italic text-white">{{ fields[active].count }} {{ fields[active].count === 1 ? 'journal' : 'journals' }} accepting submissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class DisciplineExplorerComponent {
  fields = fields;
  active = 0;

  pad(n: number) {
    return String(n).padStart(2, '0');
  }
}
