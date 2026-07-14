import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

const benefits = [
  { title: 'Professional Quality', description: 'Expert editing, cover design, formatting, and printing to ensure your book stands out.', tint: 'bg-brand-tint-amber', accent: 'text-accent-amber' },
  { title: 'Global Distribution', description: 'Available on Amazon, Barnes & Noble, bookstores, libraries, and online retailers worldwide.', tint: 'bg-brand-tint-blue', accent: 'text-accent-blue' },
  { title: 'Author Control', description: 'You retain full rights to your work and make key creative decisions.', tint: 'bg-brand-surface-alt', accent: 'text-brand-primary' },
  { title: 'Higher Royalties', description: 'Keep more of your earnings compared to traditional publishing.', tint: 'bg-brand-tint-teal', accent: 'text-accent-teal' },
  { title: 'Personalized Support', description: 'Dedicated guidance from our team every step of the way — no impersonal process.', tint: 'bg-brand-tint-rose', accent: 'text-accent-rose' },
];

const process = [
  { step: '01', title: 'Submit Your Manuscript', description: "Share your work with us for a free evaluation. We'll review it and provide honest feedback on its potential." },
  { step: '02', title: 'Professional Editing & Design', description: 'Work with our editors to polish your manuscript. Then, collaborate on stunning cover design and interior layout.' },
  { step: '03', title: 'Production & Printing', description: 'We handle formatting for print and ebook, ISBN assignment, and high-quality production.' },
  { step: '04', title: 'Distribution & Sales', description: 'Your book goes live with worldwide availability, including print-on-demand to avoid upfront inventory costs.' },
  { step: '05', title: 'Marketing & Promotion', description: 'Get support with author websites, social media, book launches, and optional advanced marketing packages.' },
  { step: '06', title: 'Ongoing Royalties', description: 'Earn royalties on every sale, paid directly and transparently.' },
];

@Component({
  selector: 'app-books-benefits',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-white py-24 md:py-32">
    <div class="animate-mesh pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-tint-amber blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal>
        <div class="mx-auto max-w-2xl text-center">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">Why Publish With Us</p>
          <h2 class="font-serif text-4xl leading-tight tracking-tight text-brand-ink md:text-5xl">A Publishing Partner Built for Authors</h2>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
        <div appReveal variant="scale" class="md:col-span-3 md:row-span-2">
          <div class="card-lift group relative flex h-full min-h-[400px] flex-col justify-end overflow-hidden rounded-[2rem] border border-brand-line/70">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80" alt="Stack of open books in warm light" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent"></div>
            <div class="relative p-9">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Marketing Assistance</p>
              <h3 class="mt-3 max-w-sm font-serif text-3xl leading-snug text-white">Tools and strategies to promote your book and build your audience</h3>
            </div>
          </div>
        </div>

        <div *ngFor="let b of benefits; let i = index" appReveal [delay]="(i % 2) * 120" [variant]="i % 2 === 0 ? 'left' : 'right'" class="md:col-span-3">
          <div [class]="'card-lift flex h-full flex-col justify-between rounded-[2rem] border border-brand-line/70 p-8 ' + b.tint">
            <p [class]="'text-xs font-bold uppercase tracking-[0.2em] ' + b.accent">{{ b.title }}</p>
            <p class="mt-4 font-serif text-xl leading-snug tracking-tight text-brand-ink md:text-2xl">{{ b.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class BooksBenefitsComponent {
  benefits = benefits;
}

@Component({
  selector: 'app-books-process',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-brand-surface py-24 md:py-32">
    <div class="animate-mesh-slow pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-tint-amber blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal>
        <div class="max-w-2xl">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">Our Publishing Process</p>
          <h2 class="font-serif text-4xl leading-tight tracking-tight text-brand-ink md:text-5xl">From Manuscript to Market</h2>
        </div>
      </div>

      <div class="mt-14">
        <div *ngFor="let p of process; let i = index" appReveal [delay]="i * 70" variant="left">
          <div class="group flex flex-col gap-3 border-b border-brand-line py-8 transition-all duration-500 hover:pl-4 md:flex-row md:items-baseline md:gap-10">
            <span class="shrink-0 font-serif text-4xl text-accent-amber/40 transition-colors duration-500 group-hover:text-accent-amber md:text-5xl">{{ p.step }}</span>
            <h3 class="shrink-0 font-serif text-2xl tracking-tight text-brand-ink transition-colors duration-300 group-hover:text-accent-amber md:w-96 md:text-3xl">{{ p.title }}</h3>
            <p class="max-w-xl text-sm leading-relaxed text-brand-body md:text-base">{{ p.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class BooksProcessComponent {
  process = process;
}

@Component({
  selector: 'app-books-submission',
  standalone: true,
  imports: [RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-white py-24 md:py-28">
    <div class="animate-mesh pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-tint-rose blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal variant="scale">
        <div class="mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] border border-brand-line/70 bg-white shadow-[0_24px_64px_rgba(20,24,31,0.1)] md:grid-cols-[1fr_1.4fr]">
          <div class="img-zoom relative hidden md:block">
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80" alt="Grand library reading hall" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
          </div>

          <div class="p-8 md:p-12">
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">Submit Your Proposal</p>
            <h2 class="font-serif text-3xl tracking-tight text-brand-ink">Ready to Publish Your Book?</h2>
            <p class="mt-4 text-sm leading-relaxed text-brand-body">
              Our editorial team will review your submission and aim to respond within <strong class="text-brand-ink">4–8 weeks</strong> with initial feedback and next steps. We charge no upfront reading fees or submission charges.
            </p>

            <div class="mt-6 space-y-3">
              <div class="rounded-xl bg-brand-surface p-4">
                <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">Submit To</p>
                <a href="mailto:HAPIbooks@hapiacademia.com" class="mt-1 block text-sm font-semibold text-brand-primary hover:text-brand-primary-dark">HAPIbooks&#64;hapiacademia.com</a>
              </div>
              <div class="rounded-xl bg-brand-surface p-4">
                <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">Proposal Forms</p>
                <p class="mt-1 text-sm text-brand-body">Book Series Proposal Form &amp; Book Proposal Form (Word format)</p>
              </div>
            </div>

            <a href="mailto:HAPIbooks@hapiacademia.com" class="btn-shine mt-7 inline-block rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-dark">Submit Your Manuscript</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class BooksSubmissionComponent {}
