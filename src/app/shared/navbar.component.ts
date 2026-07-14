import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
  <header class="sticky top-0 z-50">
    <div class="hidden bg-brand-dark-alt text-white md:block">
      <div class="container-hapi flex h-9 items-center justify-between text-xs">
        <span class="text-white/60">UAE &middot; Malaysia &middot; UK &middot; Saudi Arabia &middot; India</span>
        <div class="flex items-center gap-5">
          <a href="mailto:info@hapiacademia.com" class="text-white/60 transition-colors hover:text-white">info&#64;hapiacademia.com</a>
          <a routerLink="/contact" class="rounded-full border border-white/20 px-3.5 py-1 font-medium text-white/90 transition-colors hover:border-white/50 hover:text-white">Sign In</a>
        </div>
      </div>
    </div>

    <div [class]="'border-b transition-all duration-500 ' + (scrolled ? 'border-brand-line/80 bg-white/80 shadow-[0_8px_32px_rgba(20,24,31,0.06)] backdrop-blur-xl' : 'border-transparent bg-white/60 backdrop-blur-md')">
      <nav class="container-hapi flex h-[72px] items-center justify-between gap-6">
        <a routerLink="/" class="group flex items-center gap-3">
          <img src="/logo.png" alt="Hikmah Academia logo" class="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-105" />
          <span class="leading-tight">
            <span class="block font-heading text-base font-bold tracking-tight text-brand-ink">Hikmah Academia</span>
            <span class="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">Publishing Institute</span>
          </span>
        </a>

        <ul class="hidden items-center gap-1 lg:flex">
          <li *ngFor="let link of links"><a [routerLink]="link.href" class="rounded-full px-4 py-2 text-sm font-semibold text-brand-body transition-colors duration-300 hover:bg-brand-surface-alt hover:text-brand-primary">{{ link.label }}</a></li>
        </ul>

        <div class="flex items-center gap-3">
          <a routerLink="/contact" class="hidden animate-cta-pulse rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-dark hover:shadow-xl hover:shadow-brand-primary/30 lg:inline-block">Submit Manuscript</a>

          <button class="rounded-lg p-2 text-brand-ink lg:hidden" aria-label="Toggle menu" (click)="open = !open">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path *ngIf="open" d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
              <path *ngIf="!open" d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </div>

    <div *ngIf="open" class="border-b border-brand-line bg-white/95 px-6 pb-6 backdrop-blur-xl lg:hidden">
      <ul class="flex flex-col gap-1 pt-4">
        <li *ngFor="let link of links">
          <a [routerLink]="link.href" (click)="open = false" class="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-body transition-colors hover:bg-brand-surface-alt hover:text-brand-primary">{{ link.label }}</a>
        </li>
      </ul>
      <a routerLink="/contact" (click)="open = false" class="mt-4 inline-block w-full rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold text-white">Submit Manuscript</a>
    </div>
  </header>
  `,
})
export class NavbarComponent {
  links = [
    { label: 'Home', href: '/' },
    { label: 'Journals', href: '/journals' },
    { label: 'Books', href: '/books' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ];

  open = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 12;
  }
}
