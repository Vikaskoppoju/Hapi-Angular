import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RevealDirective],
  template: `
  <section id="contact" class="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark">
    <div class="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border border-white/10"></div>
    <div class="pointer-events-none absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full border border-white/10"></div>
    <div class="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-white/5 blur-2xl"></div>

    <div class="container-hapi relative py-24 text-center md:py-28">
      <div appReveal>
        <h2 class="mx-auto max-w-2xl font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">Ready to Publish Your Research?</h2>
        <p class="mx-auto mt-5 max-w-xl text-lg text-white/80">Join a growing community of scholars publishing multidisciplinary, open-access research with Hikmah Academia.</p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:info@hapiacademia.com" class="rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-primary shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">Submit Manuscript</a>
          <a routerLink="/services" class="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10">Explore Services</a>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class CtaComponent {}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <footer class="bg-gradient-to-b from-brand-dark to-brand-dark-alt text-white/60">
    <div class="container-hapi py-8">
      <div class="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Hikmah Academia logo" class="h-12 w-12 object-contain" />
            <span class="leading-tight">
              <span class="block font-heading text-sm font-bold text-white">Hikmah Academia</span>
              <span class="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Publishing Institute</span>
            </span>
          </div>
          <p class="mt-3 max-w-xs text-sm leading-relaxed">Publishing Insight. Cultivating Wisdom.</p>
        </div>

        <div>
          <p class="font-heading text-xs font-bold uppercase tracking-[0.18em] text-white">Explore</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a routerLink="/" class="transition-colors hover:text-white">Home</a></li>
            <li><a routerLink="/journals" class="transition-colors hover:text-white">Journals</a></li>
            <li><a routerLink="/books" class="transition-colors hover:text-white">Books</a></li>
            <li><a routerLink="/services" class="transition-colors hover:text-white">Services</a></li>
            <li><a routerLink="/contact" class="transition-colors hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <p class="font-heading text-xs font-bold uppercase tracking-[0.18em] text-white">Locations</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li>United Arab Emirates</li>
            <li>Malaysia</li>
            <li>United Kingdom</li>
            <li>Saudi Arabia</li>
            <li>India</li>
          </ul>
        </div>

        <div>
          <p class="font-heading text-xs font-bold uppercase tracking-[0.18em] text-white">Contact</p>
          <a href="mailto:info@hapiacademia.com" class="mt-3 block text-sm transition-colors hover:text-white">info&#64;hapiacademia.com</a>
          <div class="mt-3 flex flex-wrap gap-2.5">
            <a *ngFor="let s of socials" [href]="s.href" class="rounded-full border border-white/15 px-3.5 py-1.5 text-xs transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:text-white">{{ s.label }}</a>
          </div>
        </div>
      </div>

      <div class="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/40">
        Copyright &#169; {{ year }} hapiacademia. All Rights Reserved.
      </div>
    </div>
  </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
  socials = [
    { label: 'Facebook', href: '#' },
    { label: 'X (Twitter)', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
  ];
}
